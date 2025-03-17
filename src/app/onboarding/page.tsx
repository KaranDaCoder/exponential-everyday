import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';


const OnboardingPage = () => {
  return (
    <div className='h-[calc(100dvh-7.5rem)] max-w-7xl mx-auto flex items-center justify-center gap-x-4'>
      <div className='h-5/6 lg:w-1/2 w-full border-2 shadow rounded-md py-4 border-teal-900 '>
        <h1 className='text-2xl font-medium capitalize text-center flex flex-col gap-1'>
          Hi! Let's get you quickly onboarded.
          <span className='text-sm text-muted-foreground'>
            (Its just one time. Trust us.)
          </span>
        </h1>
        <form className='flex flex-col space-y-8 lg:px-10 px-5 mt-10'>
          <div className='space-y-2'>
            <Label className='text-lg'>What should we call you?</Label>
            <Input
              placeholder='potato'
              className='focus-visible:ring-1 focus-visible:ring-teal-950 ring-1 ring-teal-900'
            />
          </div>
          <div className='space-y-2'>
            <Label className='text-lg'>Tell us a bit about yourself.</Label>
            <Textarea
              placeholder='potato'
              className='focus-visible:ring-1 focus-visible:ring-teal-950 ring-1 ring-teal-900'
            />
          </div>
          <div className='space-y-2 flex items-center justify-between'>
            <Label className='text-lg'>Get weekly progress reports?</Label>
            <Checkbox className='border-2 border-teal-900' />
          </div>
          <div className='w-full flex justify-end'>
            <Button className='px-4 bg-teal-950 hover:bg-teal-800'>
              Onboard Me
            </Button>
          </div>
        </form>
        <div className='w-full text-center mt-5'>
          <p className='text-sm italic w-full'>
            You can update these details anytime in your profile
          </p>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage