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
          <User className='w-10 h-10 p-1 rounded-full border cursor-pointer' />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='px-3 py-4'>
        <DropdownMenuItem>
          <Link
            href={'/dashboard'}
            className='uppercase font-medium tracking-wider'
          >
            dashboard
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
              className='hover:no-underline uppercase font-medium px-0 py-0 hover:text-teal-800 cursor-pointer'
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