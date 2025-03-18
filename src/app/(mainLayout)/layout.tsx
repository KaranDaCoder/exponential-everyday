import React from 'react'
import Sidebar from '@/components/common/Sidebar';

const MainLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <main className='flex gap-4 h-[calc(100dvh-8rem)] text-teal-950'>
      <div className='lg:min-w-[180px] hidden lg:block overflow-hidden'>
      <Sidebar/>
      </div>
      <div className='flex-1 px-4 overflow-x-hidden overflow-y-auto'>{children}</div>
    </main>
  );
}

export default MainLayout