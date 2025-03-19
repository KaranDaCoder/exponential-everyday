'use client'
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Switch } from '@/components/ui/switch';
import { handleUserOnboarding } from '@/actions/user';
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { userOnboardingSchema } from '@/lib/zodSchemas';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { LoaderIcon } from 'lucide-react';



const OnboardingForm = () => {
 const router = useRouter();
 const {register, handleSubmit , setValue, formState : {errors, isSubmitting}} = useForm<z.infer<typeof userOnboardingSchema>>({
  resolver : zodResolver(userOnboardingSchema),
  defaultValues : {
   displayName : '',
   bio : '',
   reports : false
  }
 });
 const onSubmit : SubmitHandler<z.infer<typeof userOnboardingSchema>> = async(data) => {
 const {message, success} =  await handleUserOnboarding(data)
  if(success) {
   toast.success(message, { duration: 3500 });
   router.refresh()
  } else {
   toast.error(message , {duration : 3500})
  }
 }
  return (
    <form
      className='flex flex-col px-5 mt-10 space-y-4 lg:px-10'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='space-y-2'>
        <Label className='text-lg'>What should be your display name?</Label>
        <Input
          placeholder='e.x : CouchPotato'
          className='focus-visible:ring-1 focus-visible:ring-teal-950 ring-1 ring-teal-900'
          {...register('displayName')}
        />
        {errors.displayName && (
          <p className='text-sm text-red-500'>{errors.displayName.message}</p>
        )}
      </div>
      <div className='space-y-2'>
        <Label className='text-lg'>Tell us how motivated you feel getting better.</Label>
        <Textarea
          placeholder='potato'
          className='focus-visible:ring-1 focus-visible:ring-teal-950 ring-1 ring-teal-900'
          {...register('bio', { required: false})}
        />
      </div>
      <div className='flex items-center justify-between space-y-2'>
        <Label className='text-lg'>Get weekly progress reports?</Label>
        <Switch onCheckedChange={(checked) => setValue('reports', checked)} />
      </div>
      <div className='flex justify-end w-full'>
        <Button
          className={`px-4 bg-teal-800 hover:bg-teal-900`}
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className='flex items-center gap-1'>
              Please Wait <LoaderIcon className='animate-spin' />
            </span>
          ) : (
            'Onboard Me'
          )}
        </Button>
      </div>
    </form>
  );
};

export default OnboardingForm;
