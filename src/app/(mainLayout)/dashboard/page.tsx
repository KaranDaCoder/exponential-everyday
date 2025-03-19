// import { validateUserOnboardingStatus } from "@/actions/user";
import { validateUserOnboardingStatus } from '@/actions/user';
import PageHeader from '@/components/common/PageHeader';
import ProgressCard from '@/components/Dashboard/ProgressCard';
import Welcome from '@/components/Dashboard/Welcome';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { validateSession } from '@/lib/auth/validateSession';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import ActiveHabitTrackerCard from '@/components/Dashboard/ActiveHabitTrackerCard';

const DashboardPage = async () => {
  const user = await validateSession();
  const { message } = await validateUserOnboardingStatus();
  if (!message) redirect('/onboarding');
  return (
    <div className='space-y-4'>
      <PageHeader header='Dashboard' />

      <div className='flex flex-col lg:flex-row lg:gap-6 gap-y-4'>
        {/* WELCOME */}
        <Welcome
          username={user.user?.displayName ? user.user?.displayName : 'User'}
        />

        {/* PROGRESS CARDS */}
        <div className='grid w-full grid-cols-1 gap-3 lg:w-3/4 lg:grid-cols-2'>
          {/* Card-1 : STRENGTH */}
          <ProgressCard bgColor='bg-green-100' count={0} label={'On target!'} />
          {/* Card-1 : ACTIVE HT */}
          <ProgressCard
            bgColor='bg-yellow-100'
            count={0}
            total={0}
            label='Active habit trackers'
          />
          {/* Card-1 : ACTIVE HABITS */}
          <ProgressCard
            bgColor='bg-orange-100'
            count={0}
            total={0}
            label='Active habits'
          />
          {/* Card-1 : UPCOMING HABITS */}
          <ProgressCard
            bgColor='bg-stone-100'
            count={0}
            total={0}
            label='upcoming habits'
          />
        </div>
      </div>
      {/* Avtive Habit Trackers */}
      <div className='h-auto overflow-hidden border-2 border-teal-900 rounded-md'>
        <h1 className='py-1 text-lg font-light tracking-wider text-center text-white uppercase bg-teal-800'>
          Habit Trackers for today
        </h1>
        <div className='flex h-full gap-4 px-2 py-3 overflow-x-auto'>
          {/* Active HT CARD */}
        <ActiveHabitTrackerCard/>
        <ActiveHabitTrackerCard/>
        <ActiveHabitTrackerCard/>
        <ActiveHabitTrackerCard/>
        </div>
      </div>
      {/* Graphs */}
      <div className='border min-h-[12rem]'></div>
    </div>
  );
};

export default DashboardPage;
