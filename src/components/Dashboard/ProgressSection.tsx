'use client'
import { HabitType } from '@/lib/types/types'
import React, { useMemo } from 'react'
import ProgressCard from './ProgressCard';

const ProgressSection = ({data} : {data : HabitType[]}) => {
 const {
   activeHabits,
   upcomingHabits,
   activeHabitTrackers,
   totalHabitTrackers,
 } = useMemo(() => {
   const activeHabits = data.filter(
     (habit) => habit.status === 'ACTIVE'
   ).length;
   const upcomingHabits = data.filter(
     (habit) => habit.status === 'UPCOMING'
   ).length;
   const totalHabitTrackers = data.flatMap(
     (habit) => habit.habitTrackers || []
   ).length;
   const activeHabitTrackers = data
     .flatMap((habit) => habit.habitTrackers || [])
     .filter((tracker) => tracker.status === 'ACTIVE').length;

   return {
     activeHabits,
     upcomingHabits,
     activeHabitTrackers,
     totalHabitTrackers,
   };
 }, [data]); 
  return (
    <div className='grid w-full grid-cols-1 gap-3 lg:w-3/4 lg:grid-cols-2'>
      <ProgressCard bgColor='bg-green-100' count={0} label={'On target!'} />
      {/* Card-1 : ACTIVE HT */}
      <ProgressCard
        bgColor='bg-yellow-100'
        count={activeHabitTrackers}
        total={totalHabitTrackers}
        label='Active habit trackers'
      />
      {/* Card-1 : ACTIVE HABITS */}
      <ProgressCard
        bgColor='bg-orange-100'
        count={activeHabits}
        total={data.length}
        label='Active habits'
      />
      {/* Card-1 : UPCOMING HABITS */}
      <ProgressCard
        bgColor='bg-stone-100'
        count={upcomingHabits}
        total={data.length}
        label='upcoming habits'
      />
    </div>
  );
}

export default ProgressSection