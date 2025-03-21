import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignRightIcon } from 'lucide-react';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { navLinksBottom, navLinksTop } from '@/lib/navinks';
import HabitDrawer from './HabitDrawer';
import { Button } from '../ui/button';
import { signOut } from '@/lib/auth/auth';
import { validateSession } from '@/lib/auth/validateSession';


const MobileNavDrawer = async () => {
  const {message : user} = await validateSession();

  return (
    <Sheet>
      <SheetTrigger>
        <AlignRightIcon className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='flex'>
            <span className='flex px-2 py-1 bg-teal-900 border-2 border-teal-900 rounded-l-md text-teal-50'>
              Exponential
            </span>
            <span className='flex px-2 py-1 text-teal-900 bg-white border-2 border-teal-900 rounded-r-md'>
              Everyday
            </span>
          </SheetTitle>
          <aside className='flex flex-col h-full gap-3 p-2'>
            {user?.isOnboarded && <div className='flex flex-col items-start justify-start h-3/4 gap-y-4 my-14'>
              {navLinksTop.map((link) => (
                <SheetClose asChild key={link.label}>
                  <Link
                    href={link.href}
                    className={`py-4 uppercase  w-full px-4 tracking-wider bg-white text-teal-900 font-medium hover:text-teal-700`}
                    key={link.label}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </SheetClose>
              ))}
              <HabitDrawer />
            </div>}

            <div className='flex flex-col '>
              <Separator />

              {navLinksBottom.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    key={link.href}
                    className='w-full px-4 py-3 tracking-wider text-teal-900 uppercase bg-white'
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <SheetClose asChild>
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <Button
                  variant={'link'}
                  className='px-4 py-4 text-base font-medium tracking-wider text-teal-900 uppercase bg-white cursor-pointer hover:text-teal-700 hover:no-underline'
                >
                  LOGOUT
                </Button>
              </form>
            </SheetClose>
          </aside>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavDrawer