import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { PenBoxIcon } from 'lucide-react';
import { Button } from '../ui/button';

const HabitDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button  className='uppercase inline-flex bg-teal-900 text-white items-center space-x-1 rounded-md hover:bg-teal-800 cursor-pointer'>
          <PenBoxIcon className='w-8 h-8'/>
          <span className='md:block'>New Habit</span>
        </Button>
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

export default HabitDrawer