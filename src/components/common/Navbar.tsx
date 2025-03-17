'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { User, UserIcon } from 'lucide-react';
import HabitDrawer from './HabitDrawer';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  return (
    <nav className='py-4 z-50 flex items-center justify-between sticky top-0'>
      <Link
        href={'/'}
        className='uppercase text-xl font-semibold tracking-widest flex'
      >
        <span className='px-2 py-1 border-2 flex rounded-l-md border-teal-900 bg-teal-900 text-teal-50'>
          E<span className='hidden lg:block'>xponential</span>
        </span>
        <span className='px-2 py-1 border-2 flex rounded-r-md border-teal-900 bg-white text-teal-900'>
          E<span className='hidden lg:block'>veryday</span>
        </span>
      </Link>

      <div className="">
      <User className='w-10 h-10 p-1 rounded-full border'/>
      </div>
    </nav>
  );
};

export default Navbar;
