import ActiveHabitTrackerCard from './ActiveHabitTrackerCard';
import { HabitTrackerType } from '@/lib/types/types';


const ActiveHabitTrackerSection = ({
  habitTrackers,
}: {
  habitTrackers: HabitTrackerType[];
}) => {
  return (
    <div className='h-auto overflow-hidden border-2 border-teal-900 rounded-md'>
      <h1 className='py-1 text-lg font-light tracking-wider text-center text-white uppercase bg-teal-800'>
        Habit Trackers for today
      </h1>
      <div className='flex items-center h-auto gap-4 px-2 py-3 overflow-x-auto'>
        {habitTrackers.map((tracker) => (
          <ActiveHabitTrackerCard key={tracker.id} habitTracker={tracker} />
        ))}
      </div>
    </div>
  );
};

export default ActiveHabitTrackerSection;
