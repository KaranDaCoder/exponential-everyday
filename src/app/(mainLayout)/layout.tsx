import React from 'react'
import Sidebar from '@/components/common/Sidebar';

const MainLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <main className='flex gap-4 min-h-[calc(100dvh-7.5rem)] text-teal-950'>
      <div className='lg:min-w-[180px] hidden lg:block overflow-hidden'>
      <Sidebar/>
      </div>
      <div className='flex-1 overflow-y-auto overflow-x-hidden px-4'>{children}</div>
    </main>
  );
}

export default MainLayout