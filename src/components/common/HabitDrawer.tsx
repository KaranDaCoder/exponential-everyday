import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import HabitForm from './HabitForm';

const HabitDrawer = () => {

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <span className='flex items-center gap-2 px-4 py-4 font-medium tracking-wider text-teal-900 uppercase cursor-pointer'>
          New Habit
        </span>
      </DrawerTrigger>
      <DrawerContent className='top-0 left-0 w-auto h-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3'>
        <DrawerHeader>
          <DrawerTitle className='text-lg text-center uppercase text-muted-foreground'>
            Create New Habit
          </DrawerTitle>
          {/* Provide an accessible description here */}
          <DrawerDescription className='font-semibold text-center'>
            Great Job! Just a few details about your new habit.
          </DrawerDescription>
        </DrawerHeader>
        <HabitForm />
      </DrawerContent>
    </Drawer>
  );
};

export default HabitDrawer;
