'use client';
import HabitDrawer from '@/components/common/HabitDrawer';
import { Separator } from '@/components/ui/separator';
import { navLinksBottom, navLinksTop } from '@/lib/navinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { SheetClose } from '../ui/sheet';

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className='h-full p-2 flex flex-col gap-3'>
      <div className='h-3/4 flex flex-col items-start justify-start gap-y-4 my-24'>
        {/* <Separator/> */}
        {navLinksTop.map((link) => (
          <Link
            href={link.href}
            className={`py-4 uppercase  w-full px-4 tracking-wider ${
              pathName === link.href.toLowerCase()
                ? 'bg-teal-900 text-teal-50 font-light hover:text-teal-400'
                : 'bg-white text-teal-900 font-medium hover:text-teal-700'
            }  rounded-md transition-all`}
            key={link.label}
          >
            {link.label.toUpperCase()}
          </Link>
        ))}
        <HabitDrawer />
      </div>

      <div className='h-1/4 flex gap-1 flex-col items-start justify-end'>
        <Separator />

        {navLinksBottom.map((link) => (

          <Link
            href={link.href}
            key={link.href}
            className='py-4 uppercase  w-full px-4 tracking-wider bg-white text-teal-900'
          >
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
