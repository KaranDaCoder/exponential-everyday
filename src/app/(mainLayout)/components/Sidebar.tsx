import { Separator } from '@/components/ui/separator';
import { SeparatorHorizontal } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='h-full p-2 flex flex-col gap-3'>
      <div className='h-3/4 flex flex-col items-start justify-start gap-y-4 my-24'>
        <Link
          href={'/dashboard'}
          className='py-3 uppercase  w-full px-4 tracking-wider bg-teal-900 rounded-md text-teal-50'
        >
          Dashboard
        </Link>
        <Link
          href={'/'}
          className='py-3 uppercase  w-full px-4 tracking-wider bg-white text-teal-900'
        >
          New Habit
        </Link>
        <Link
          href={'/my-habits'}
          className='py-3 uppercase  w-full px-4 tracking-wider bg-white text-teal-900'
        >
          My Habits
        </Link>
        <Link
          href={'/my-activity'}
          className='py-3 uppercase  w-full px-4 tracking-wider bg-white text-teal-900'
        >
          My Activity
        </Link>
        <Link
          href={'/'}
          className='py-3 uppercase  w-full px-4 tracking-wider bg-white text-teal-900'
        >
          My Profile
        </Link>
      </div>

      <div className='h-1/4 flex flex-col items-start justify-end'>
       <Separator/>
        <Link
          href={'/my-habits'}
          className='py-3 uppercase  w-full px-4 tracking-wider bg-white text-teal-900'
        >
         help
        </Link>
        <Link
          href={'/my-habits'}
          className='py-3 uppercase  w-full px-4 tracking-wider bg-white text-teal-900'
        >
         Logout
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar