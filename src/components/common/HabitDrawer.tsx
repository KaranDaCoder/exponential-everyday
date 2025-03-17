import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

const HabitDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <span className='flex items-center gap-2 uppercase font-medium tracking-wider cursor-pointer text-teal-900 py-4 px-4'>
          New Habit
        </span>
      </DrawerTrigger>
      <DrawerContent className='left-0 top-0 h-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 w-full bg-white'>
        <DrawerHeader>
          <DrawerTitle className='text-center uppercase text-muted-foreground'>
            Create New Habit
          </DrawerTitle>
          {/* Provide an accessible description here */}
          <DrawerDescription className='text-center font-semibold'>
            Start creating your new habit by filling in the details below.
          </DrawerDescription>
        </DrawerHeader>
        {/* <HabitForm /> */}
      </DrawerContent>
    </Drawer>
  );
};

export default HabitDrawer;
