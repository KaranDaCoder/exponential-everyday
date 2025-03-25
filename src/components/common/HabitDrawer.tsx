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
import { Button } from '../ui/button';

const HabitDrawer = () => {
  
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant={'link'}
          className='text-[16px] px-4 mt-4 font-medium tracking-wider uppercase cursor-pointer hover:no-underline text-teal-800'
          aria-describedby='Creating New Habit'
          aria-label='toggle habit drawer'
        >
          New Habit
        </Button>
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
