import React from 'react'
import { Button } from '../ui/button';
import { signIn } from '@/lib/auth/auth';

const LoginSignUp = () => {
  return (
    <div className='text-sm font-semibold'>
      <form
        action={async() => {
          'use server'
          await signIn("google", {redirectTo: '/dashboard'});
        }}
      >
        <Button type='submit'>signup/Login</Button>
      </form>
    </div>
  );
}

export default LoginSignUp