'use server';

import { auth } from '@/lib/auth/auth';
import { validateSession } from '@/lib/auth/validateSession';
import { db } from '@/lib/db/db';
import { HabitTrackerType } from '@/lib/types/types';
import { Decimal } from '@prisma/client/runtime/library';
import { DateTime } from 'luxon';

export const allHabitTrackers = async () => {
  const session = await auth();
  if (!session?.user?.id) return;
  try {
    const allTrackers = await db.habitTracker.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
       habit : true
      },
      orderBy: {
        logged_at: 'asc',
      },
    });
    const trackers = allTrackers.map(tracker => ({...tracker,
     daily_difficulty : tracker.daily_difficulty.toNumber(),
     expected_difficulty : tracker.expected_difficulty.toNumber(),
    }))
    return { success: true, data: trackers };
  } catch (error) {
    console.log(`something went wrong with fetching trackers... ${error}`);
  }
};

export const generateHabitTrackers = async () => {
  const { message : user } = await validateSession();
  
  // const today = DateTime.now().setZone(user?.timezone);
 
   if (!user?.id) return { message: 'user not authenticated', success: false };
  try {
    // Get all active habits.
    const activeHabits = await db.habit.findMany({
      where: { status: 'ACTIVE', userId: user.id },

      include: { habitTrackers: true },
    });

    const trackerArr: HabitTrackerType[] = [];

    activeHabits.forEach((habit) => {
      const startDate = DateTime.fromJSDate(habit.start_date);
         const daysDiff = Math.abs(DateTime.now().setZone(user.timezone).diff(DateTime.fromJSDate(habit.start_date).setZone(user.timezone), 'days').days);
         console.log(daysDiff)

      for (let i = 0; i <= daysDiff; i++) {
          trackerArr.push({
            logged_at: startDate.plus({ days: i }).toJSDate(),
            status: habit.status,
            userId: habit.userId,
            habitId: habit.id,
            daily_difficulty: new Decimal(1.0).toNumber(),
            expected_difficulty: new Decimal(Math.pow(1.01, i + 1)).toNumber(),
          });
      }
    });

    if (trackerArr.length > 0) {
      await db.habitTracker.createMany({
        data: trackerArr,
        skipDuplicates: true,
      });
    } else {
      console.log('No new trackers to create.');
    }
  } catch (error) {
    console.error('Something went wrong with creating trackers:', error);
  }
};
