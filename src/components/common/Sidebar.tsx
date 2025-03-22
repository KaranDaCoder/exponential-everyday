'use client';
import HabitDrawer from '@/components/common/HabitDrawer';
import { Separator } from '@/components/ui/separator';
import { navLinksBottom, navLinksTop } from '@/lib/static_data/navinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className='flex flex-col h-full gap-3 p-2'>
      <div className='flex flex-col items-start justify-start my-24 h-3/4 gap-y-4'>
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

      <div className='flex flex-col items-start justify-end gap-4 h-1/4'>
        <Separator />

        {navLinksBottom.map((link) => (

          <Link
            href={link.href}
            key={link.href}
            className='px-4 py-2 text-sm tracking-wider text-teal-900 uppercase bg-white w-fit'
          >
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
