import React from 'react'
import PageHeader from '@/components/common/PageHeader'

const DashboardPage = () => {
  return (
    <div className='flex flex-col space-y-4'>
      <PageHeader header='Dashboard' />
      <div className='grid lg:grid-cols-4 gap-3 border'>
        <div className='col-span-3'>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
            <div className='bg-teal-50 rounded-xl shadow col-span-1 lg:col-span-2 h-44'>
              1
            </div>
            <div className='bg-teal-50 rounded-xl shadow col-span-1 lg:col-start-3 h-44'>
              2
            </div>
            <div className='bg-teal-50 rounded-xl shadow col-span-1 lg:col-start-1 h-44'>
              3
            </div>
            <div className='bg-teal-50 rounded-xl shadow col-span-1 lg:col-start-2 h-44'>
              4
            </div>
            <div className='bg-teal-50 rounded-xl shadow col-span-1 lg:col-start-3 h-44'>
              5
            </div>
            <div className='bg-teal-50 rounded-xl shadow col-span-full h-96 hidden lg:block'>
              Some graph
            </div>
          </div>
        </div>
        <div className='col-start-4 col-span-full bg-teal-50 rounded-xl shadow'>
          <h1>Active Habit Trackers</h1>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage