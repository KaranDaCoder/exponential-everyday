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
  if(!user?.id) return {message : 'user not authenticated' , success : false}

  let status: 'ACTIVE' | 'UPCOMING' = 'UPCOMING';
  const { start_date } = data;

  const today = DateTime.now().setZone('system').startOf('day').toJSDate();
  if (start_date.getTime() < today.getTime()) return {message : 'start date is in the past', success : false}
  
    if (start_date.getTime() == today.getTime()) {
      status = Status.ACTIVE;
    } else {
      status = Status.UPCOMING;
    }
  try {
    const isHabitExist = await db.habit.findUnique({
      where: {
        userId_name: {
          userId: user.id,
          name: data.name,
        },
      }
    });

    if (isHabitExist)
      return { message: 'Oops! Habit already exists.', success: false };

     await db.habit.create({
      data: {
        name: data.name,
        category: data.category,
        start_date: data.start_date,
        description: data.description,
        userId: user.id,
        status,
      },
    });
    revalidatePath('/dashboard');
    return { message: 'Habit created successfully!', success: true };
  } catch (error) {
    console.log(error);
    return { message: 'something went wrong', success: false };
  }
};

export const getHabits = async () : Promise<{success : boolean, message : HabitType[] | null}> => {
  const { user } = await validateSession();
  try {
    const allHabits = await db.habit.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        habitTrackers : true
      }
    });
    const habits = allHabits.map((habit) => ({
      ...habit,
      habitTrackers : habit.habitTrackers.map(tracker => ({
        ...tracker,
        daily_difficulty :  tracker.daily_difficulty.toNumber(),
        expected_difficulty :  tracker.expected_difficulty.toNumber(),
      }))
    }));
    return { message: habits, success: true };
  } catch (error) {
    console.log(error);
    return { message: null , success: false };
  }
};
