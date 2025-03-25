'use server';

import { validateSession } from '@/lib/auth/validateSession';
import { db } from '@/lib/db/db';
import { HabitType } from '@/lib/types/types';
import { HabitSchema } from '@/lib/zodSchemas';
import { Status } from '@prisma/client';
import { DateTime } from 'luxon';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { generateHabitTrackers } from './habitTracker';

export const createNewHabit = async (data: z.infer<typeof HabitSchema>) => {
  const { message: user } = await validateSession();

  let status: 'ACTIVE' | 'UPCOMING' | 'INVALID' = 'UPCOMING'; // Default to 'UPCOMING'
  const { start_date } = data;

  const isParsed = HabitSchema.safeParse(data);
  if(!isParsed.success) return {message: `${isParsed.error.message}` , success : false}
  if (
    DateTime.now()
      .setZone(user?.timezone)
      .hasSame(DateTime.fromJSDate(start_date), 'day')
  ) {
    status = Status.ACTIVE;
    console.log(status);
    console.log(start_date);
  } else {
    const daysDiff = DateTime.fromJSDate(start_date).diff(
      DateTime.now().setZone(user?.timezone),
      'days'
    ).days;
    if (daysDiff > 0) {
      status = Status.UPCOMING;
      console.log(status);
      console.log(start_date);
    } else {
      console.log(`INVALID START DATE`);
      console.log(start_date);
      return {message : `Start Date Cannot be in past, ${start_date.toLocaleDateString()}`, success : false}
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
      await generateHabitTrackers();
      revalidatePath('/dashboard');
    return {
      message: 'Habit created successfully!',
      success: true,
    };
  } catch (error) {
    console.log('Error while creating habit:', error);
    return { message: 'Something went wrong', success: false };
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
        user : true
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
