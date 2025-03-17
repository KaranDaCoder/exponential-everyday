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


const MobileNavDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRightIcon className='cursor-pointer'/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='flex'>
            <span className='px-2 py-1 border-2 flex rounded-l-md border-teal-900 bg-teal-900 text-teal-50'>
              Exponential
            </span>
            <span className='px-2 py-1 border-2 flex rounded-r-md border-teal-900 bg-white text-teal-900'>
              Everyday
            </span>
          </SheetTitle>
          <aside className='h-full p-2 flex flex-col gap-3'>
            <div className='h-3/4 flex flex-col items-start justify-start gap-y-4 my-14'>
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
            </div>

            <div className='h-1/4 flex flex-col items-start justify-end'>
              <Separator />

              {navLinksBottom.map((link) => (
               <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  key={link.href}
                  className='py-3 uppercase  w-full px-4 tracking-wider bg-white text-teal-900'
                >
                  {link.label}
                </Link>
               </SheetClose>
              ))}
            </div>
          </aside>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavDrawer