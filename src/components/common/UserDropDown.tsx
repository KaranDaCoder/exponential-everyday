import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { signOut } from '@/lib/auth/auth';
import { Button } from '../ui/button';
import Image from 'next/image';


const UserDropDown = ({userImg} : {userImg : string}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {userImg ? (
          <Image
            src={userImg}
            alt='userImg'
            height={1920}
            width={1080}
            className='w-10 h-10 rounded-full cursor-pointer'
          />
        ) : (
          <User className='w-10 h-10 p-1 border rounded-full cursor-pointer' />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='px-3 py-4'>
        <DropdownMenuItem>
          <Link
            href={'/dashboard'}
            className='font-medium tracking-wider uppercase'
          >
            dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={'/my-profile'}
            className='font-medium tracking-wider uppercase'
          >
            My Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <form
            action={async () => {
              'use server';
              await signOut({ redirectTo: '/' });
            }}
          >
            <Button
              variant={'link'}
              className='px-0 py-0 font-medium uppercase cursor-pointer hover:no-underline hover:text-teal-800'
              type='submit'
            >
              Logout
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropDown