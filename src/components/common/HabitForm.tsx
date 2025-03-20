'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { DrawerClose, DrawerFooter } from '../ui/drawer';
import { DateTime } from 'luxon';
import { HabitSchema } from '@/lib/zodSchemas';
import { z } from 'zod';
import { HabitCategory } from '@prisma/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { categories } from '@/lib/static_data/category';
import { createNewHabit } from '@/actions/habit';
import { toast } from 'sonner';

const HabitForm = () => {
  const {
    setValue,
    watch,
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof HabitSchema>>({
    resolver: zodResolver(HabitSchema),
    defaultValues: {
      name: '',
      category: HabitCategory.OTHER,
      description: '',
      start_date: DateTime.now().setZone('system').startOf('day').toJSDate(),
    },
  });
  console.log(errors);
  const selected_start_date = watch('start_date');

  const handleCreateHabit: SubmitHandler<
    z.infer<typeof HabitSchema>
  > = async (data) => {
   const{message, success } =  await createNewHabit(data);
   if(success) {
    toast.success(message, { duration: 2500 });
    reset()
   } else {
    toast.error(message, { duration: 2500 });
   }
   console.log(message)
  };

  return (
    <form
      className={`text-teal-800 flex h-full flex-col w-[90%] mx-auto border-2 border-teal-800 rounded-md  px-4 py-4 gap-y-8 mb-9 ${
        isSubmitting ? 'blur-sm' : 'blur-none'
      }`}
      onSubmit={handleSubmit(handleCreateHabit)}
    >
      {/* Category */}
      <div className='flex flex-col gap-y-1'>
        <Label className='text-base '>Pick a category for your habit</Label>
        <Select
          value={watch('category') || 'Other'} // Ensure the default value is used
          onValueChange={(value) =>
            setValue('category', value as HabitCategory)
          }
        >
          <SelectTrigger className='w-full cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-950 ring-1 ring-teal-900'>
            <SelectValue placeholder='Theme' />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem value={cat.key} key={cat.key}>
                <span
                  className={`gap-2 capitalize inline-flex items-center text-teal-900 font-medium`}
                >
                  {cat.icon} {cat.name}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Name */}
      <div className='flex flex-col gap-y-1'>
        <Label className='text-base '>What is your habit called?</Label>
        <Input
          className='focus-visible:ring-1 focus-visible:ring-teal-950 ring-0 ring-teal-900'
          placeholder='e.g : I will shower everyday'
          {...register('name')}
        />
        {errors.name && (
          <p className='text-sm text-red-500'>{errors.name.message}</p>
        )}
      </div>
      {/* Name */}
      <div className='flex flex-col gap-y-1'>
        <Label className='text-base '>
          Describe how you plan to follow it?
        </Label>
        <Textarea
          className='focus-visible:ring-1 focus-visible:ring-teal-950 ring-0 ring-teal-900'
          placeholder='e.g : I will shower everyday'
        />
      </div>

      {/* Start date */}
      <div className='flex flex-col gap-y-1'>
        <Label className='text-base '>
          Finally, when do you plan to start?
        </Label>
        <Popover>
          <PopoverTrigger
            asChild
            className='flex items-center justify-start focus-visible:ring-1 focus-visible:ring-teal-950 ring-0 ring-teal-900'
          >
            <Button variant={'outline'}>
              <CalendarIcon />
              {selected_start_date.toLocaleDateString()}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-full border border-teal-900 rounded-md'>
            <Calendar
              className='text-teal-800'
              mode='single'
              selected={
                selected_start_date ? new Date(selected_start_date) : undefined
              }
              onSelect={(date) => {
                if (date) {
                  const isoDate = date;
                  setValue('start_date', isoDate); // Update form state
                }
              }}
              disabled={(day) =>
                day.getTime() < new Date().setHours(0, 0, 0, 0)
              }
            />
          </PopoverContent>
        </Popover>
      </div>
      <DrawerFooter>
        <div className='flex flex-row-reverse justify-between'>
          <Button
            // type='submit'
            className='transition-colors bg-teal-800 cursor-pointer hover:bg-teal-700'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Habit'}
          </Button>
          <DrawerClose asChild>
            <Button className='cursor-pointer' variant='outline'>
              Cancel
            </Button>
          </DrawerClose>
        </div>
      </DrawerFooter>
    </form>
  );
};

export default HabitForm;
