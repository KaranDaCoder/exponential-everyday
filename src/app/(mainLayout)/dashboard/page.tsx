import { validateUserOnboardingStatus } from '@/actions/user';
import PageHeader from '@/components/common/PageHeader';
import Welcome from '@/components/Dashboard/Welcome';
import { validateSession } from '@/lib/auth/validateSession';
import { redirect } from 'next/navigation';
import { getHabits } from '@/actions/habit';
import ProgressSection from '@/components/Dashboard/ProgressSection';
import { allHabitTrackers, generateHabitTrackers } from '@/actions/habitTracker';
import ActiveHabitTrackerSection from '@/components/Dashboard/ActiveHabitTrackerSection';

const DashboardPage = async () => {
  const user = await validateSession();
  const { message } = await validateUserOnboardingStatus();
  if (!message) redirect('/onboarding');
  const [habits, habitTrackers] = await Promise.all([
      getHabits(),
      allHabitTrackers(),
    ])
  await generateHabitTrackers()


  return (
    <div className='space-y-4'>
      <PageHeader header='Dashboard' />

      <div className='flex flex-col lg:flex-row lg:gap-6 gap-y-4'>
        {/* WELCOME */}
        <Welcome
          username={user.user?.displayName ? user.user?.displayName : 'User'}
        />
        {/* PROGRESS SECTION */}
        <ProgressSection data={habits.message || []} />
      </div>

      {/* ACTIBE HABIT TRACKERS */}
      <ActiveHabitTrackerSection habitTrackers={habitTrackers?.data || []}/>

      {/* GRAPHS */}
      <div className='border min-h-[12rem]'></div>
    </div>
  );
};

export default DashboardPage;
