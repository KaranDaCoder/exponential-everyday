import React from 'react'
import Sidebar from './components/Sidebar';

const MainLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <main className='flex gap-4 min-h-[calc(100dvh-7.5rem)]'>
      <div className='lg:min-w-[180px] hidden lg:block overflow-hidden'>
      <Sidebar/>
      </div>
      <div className='flex-1 overflow-y-auto p-4'>{children}</div>
    </main>
  );
}

export default MainLayout