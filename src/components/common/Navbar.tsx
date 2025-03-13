'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
  UserIcon,
} from 'lucide-react';
import HabitDrawer from './HabitDrawer';
import { usePathname } from 'next/navigation';
import { navinks } from '@/lib/navinks';

const Navbar = () => {
 const pathName = usePathname();
  return (
    <nav className='py-2 flex justify-between items-center sticky top-0 bg-stone-200 z-50'>
      <div className=''>
        <Link
          href={'/'}
          className='font-extrabold text-teal-900 text-3xl tracking-wider capitalize text-center flex items-center'
        >
          Exponential Everyday
        </Link>
      </div>

      <div className='hidden lg:flex items-center border text-sm capitalize font-light rounded-md overflow-hidden'>
        {navinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className={`px-8 font-medium py-2 transition-all ${
              pathName === link.href.toLocaleLowerCase()
                ? 'bg-teal-900 text-teal-50 border-none hover:text-teal-200'
                : 'text-stone-900 bg-teal-50 hover:text-teal-900'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className='hidden lg:flex items-center space-x-4'>
        <HabitDrawer />
        <div className='w-10 h-10 relative group'>
          <UserIcon className='w-full text-stone-900 relative flex h-full p-2 border rounded-full hover:bg-gray-200 cursor-pointer' />
          <div
            className={`h-auto w-48 py-4 border absolute right-0 mt-1 bg-white shadow-md rounded-md transition-all opacity-0 group-hover:opacity-100 group-hover:visible group-hover:mt-1`}
          >
            <div className='flex flex-col items-start w-full px-4 space-y-4'>
              <Link href={'/'} className='text-stone-600 hover:text-stone-800'>
                Settings
              </Link>
              <Link
                href={'/'}
                className='text-stone-600 hover:text-stone-800 w-full'
              >
                Help / How to
              </Link>
              <Link
                href={'/'}
                className='text-stone-600 hover:text-stone-800 w-full'
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
