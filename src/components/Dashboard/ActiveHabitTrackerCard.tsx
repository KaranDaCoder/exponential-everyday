import React from 'react'
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';

const ActiveHabitTrackerCard = () => {
  return (
    <div className='flex-none w-3/4 h-auto px-2 py-1 border border-l-4 border-teal-900 rounded-md border-l-teal-700 lg:w-[30%] hover:shadow'>
      <div className='flex flex-col gap-1'>
        <Link
          href={'/dashboard'}
          className='font-semibold capitalize w-fit hover:text-teal-600'
        >
          Habit Name in some
        </Link>
        <Textarea
          placeholder='how did you do today?'
          className='px-1 py-1 text-sm focus-visible:ring-1 focus-visible:ring-teal-950 ring-1 ring-teal-900'
        />
        <div className='flex justify-around w-full py-1'>
          <div className='space-y-1'>
            <Label className='text-muted-foreground'>Missed</Label>
            <Switch className='cursor-pointer' />
          </div>
          <div className='space-y-1'>
            <Label className='text-muted-foreground'>Completed</Label>
            <Switch className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveHabitTrackerCard