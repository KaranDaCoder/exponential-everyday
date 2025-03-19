import { validateSession } from '@/lib/auth/validateSession';
import { validateUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import OnboardingForm from '@/components/Onboarding/OnboardingForm';

const OnboardingPage = async () => {
 await validateSession();
  const { message } = await validateUserOnboardingStatus();
  if (message) redirect('/dashboard');
  return (
    <div className='min-h-[calc(100dvh-7.5rem)] max-w-7xl mx-auto flex items-center justify-center gap-x-4'>
      <div className='w-full py-4 border-2 border-teal-900 rounded-md shadow h-5/6 lg:w-1/2 '>
        <h1 className='flex flex-col gap-1 text-2xl font-medium text-center capitalize'>
          Hi! Let us get you quickly onboarded.
          <span className='text-sm text-muted-foreground'>
            (Its just one time. Trust us.)
          </span>
        </h1>
        <OnboardingForm/>
        <div className='w-full px-4 mt-4 space-y-1'>
          <h2 className='text-sm font-semibold'>Note:</h2>
          <li className='text-sm italic'>You can update these details anytime in your profile</li>
          <li className='text-sm italic'>Display name should be between 3 and 15 letters. Spaces or special characters not allowed.</li>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
