'use server';

import { auth } from '@/lib/auth/auth';
import { db } from '@/lib/db/db';
import { userOnboardingSchema } from '@/lib/zodSchemas';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const validateUserOnboardingStatus = async () => {
  const session = await auth();

  if (!session) return redirect('/');
  try {
    const isUserExist = await db.user.findUnique({
      where: { id: session.user?.id },
    });

    if (!isUserExist) {
      return { message: 'User does not exist', success: false };
    }
    if (isUserExist.isOnboarded === true) {
      return { message: true, success: true };
    }
    return { message: false, success: true };
  } catch (error) {
    throw Error(`Something went wrong ${error}`);
  }
};

export const handleUserOnboarding = async (
  data: z.infer<typeof userOnboardingSchema>
) => {
  // const validateData = userOnboardingSchema.safeParse(data);

  const session = await auth();

  if (!session) return redirect('/');
  try {
    const isUserExist = await db.user.findUnique({
      where: { id: session.user?.id },
    });

    if (!isUserExist) {
      return { message: 'User does not exist', success: false };
    }
    const onboardUser = await db.user.update({
      where: {
        id: session.user?.id,
      },
      data: {
        bio: data.bio,
        displayName: data.displayName,
        isOnboarded: true,
        reports: data.reports,
        timezone : data.timezone,
        reminders: data.reminders,
      },
    });

    return {
      message: `Congrats! ${onboardUser.displayName} you are onboarded.`,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Oops! Something went wrong please try again.`,
      success: false,
    };
  }
};
