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
  const { message: user } = await validateSession();

  let status: 'ACTIVE' | 'UPCOMING' = 'UPCOMING';

  const { start_date } = data;
  console.log(start_date)

  const todayUserTz = DateTime.now().setZone(user?.timezone);

  const startDateUserTz = DateTime.fromJSDate(start_date).setZone(
    user?.timezone
  ).startOf('day');

  console.log(todayUserTz)
  console.log(startDateUserTz)
  // console.log(todayUserTz.toJSDate())
  console.log(startDateUserTz.toJSDate())
 
  console.log(todayUserTz.toLocaleString())
  
  if (todayUserTz.endOf('day').equals(startDateUserTz.endOf('day'))) {
    status = Status.ACTIVE;
  } else {
    const diffSec = startDateUserTz
      .endOf('day')
      .diff(todayUserTz.endOf('day'), 'seconds').seconds;

    if (diffSec > 1) {
      status = Status.UPCOMING;
    } else {
      return {
        message: `${startDateUserTz.toString()} is in past`,
        success: false,
      };
    }
  }
  try {
    const isHabitExist = await db.habit.findUnique({
      where: {
        userId_name: {
          userId: user?.id as string,
          name: data.name,
        },
      },
    });

    if (isHabitExist)
      return { message: 'Oops! Habit already exists.', success: false };
    await db.habit.create({
      data: {
        name: data.name,
        category: data.category,
        start_date: start_date,
        description: data.description,
        userId: user?.id as string,
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
  const { message: user } = await validateSession();
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
