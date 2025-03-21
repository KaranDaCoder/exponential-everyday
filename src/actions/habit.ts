'use server';

import { validateSession } from '@/lib/auth/validateSession';
import { db } from '@/lib/db/db';
import { HabitType } from '@/lib/types/types';
import { HabitSchema } from '@/lib/zodSchemas';
import { Status } from '@prisma/client';
import { DateTime } from 'luxon';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const createNewHabit = async (data: z.infer<typeof HabitSchema>) => {
  const { user } = await validateSession();
  if (!user?.id) return { message: 'user not authenticated', success: false };

  let status: 'ACTIVE' | 'UPCOMING' = 'UPCOMING';
  const { start_date } = data;
  const today = DateTime.now().startOf('day');
  const start_date_str = DateTime.fromJSDate(start_date).startOf('day');
  console.log(today);
  console.log(start_date_str);

  if (today.equals(start_date_str)) {
    console.log(`ACTIVE HABIT`);
    status = Status.ACTIVE;
  } else if (today < start_date_str) {
    console.log(`UPCOMING HABIT`);
    status = Status.UPCOMING;
  } else {
    console.log(`HABIT IN PAST/`);
   return { message: 'invalid date in past', success: false };
  }
  try {
    const isHabitExist = await db.habit.findUnique({
      where: {
        userId_name: {
          userId: user.id,
          name: data.name,
        },
      },
    });

    if (isHabitExist)
      return { message: 'Oops! Habit already exists.', success: false };
    const data1 = {
      name: data.name,
      category: data.category,
      start_date: start_date_str.toJSDate(),
      description: data.description,
      userId: user.id,
      status: status,
    };
    console.log(data1);

    await db.habit.create({
      data: {
        name: data.name,
        category: data.category,
        start_date: start_date_str.toJSDate(),
        description: data.description,
        userId: user.id,
        status: status,
      },
    });
    revalidatePath('/dashboard');
    return { message: 'Habit created successfully!', success: true };
  } catch (error) {
    console.log(error);
    return { message: 'something went wrong', success: false };
  }
};

export const getHabits = async (): Promise<{
  success: boolean;
  message: HabitType[] | null;
}> => {
  const { user } = await validateSession();
  try {
    const allHabits = await db.habit.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        habitTrackers: true,
      },
    });
    const habits = allHabits.map((habit) => ({
      ...habit,
      habitTrackers: habit.habitTrackers.map((tracker) => ({
        ...tracker,
        daily_difficulty: tracker.daily_difficulty.toNumber(),
        expected_difficulty: tracker.expected_difficulty.toNumber(),
      })),
    }));
    return { message: habits, success: true };
  } catch (error) {
    console.log(error);
    return { message: null, success: false };
  }
};
