import PageHeader from "@/components/common/PageHeader";

const DashboardPage = () => {
  return (
    <div className=''>
      <PageHeader header='Dashboard' />
      <div className='flex flex-col lg:flex-row min-h-64 lg:gap-2 gap-y-4'>
        <div className='lg:w-1/2 w-full flex flex-col justify-center items-center gap-y-4'>
          <h1 className='text-5xl lg:w-5/6 w-full font-extralight space-x-2'>
          <span>Hey,</span>
            <span className='text-5xl text-muted-foreground capitalize'>
              banana.
            </span>
          </h1>
          <h2 className='text-lg px-4 rounded-md text-teal-50 tracking-wide shadow bg-green-600 lg:w-5/6 w-full'>
            It is good to see you today!
          </h2>
        </div>
        <div className='lg:w-3/4 w-full gap-3 grid lg:grid-cols-2 grid-cols-1'>
          {/* Card-1 */}
          <div className='bg-amber-100 border-2 border-teal-900 rounded-md hover:shadow hover:-rotate-3 transition-all'>
            <div className='flex flex-col items-center justify-center h-full'>
              <h1 className='inline-flex items-center justify-center gap-1'>
                <span className='text-6xl lg:text-7xl font-bold tracking-wide'>12</span>
                <span className='text-lg lg:text-xl'>of</span>
                <span className='text-2xl lg:text-4xl font-medium text-muted-foreground'>
                  33
                </span>
              </h1>
              <h2 className='uppercase text-lg text-center'>
                Active Habit trackers
              </h2>
            </div>
          </div>
          {/* Card-1 */}
          <div className='bg-amber-100 border-2 border-teal-900 rounded-md hover:shadow hover:-rotate-3 transition-all'>
            <div className='flex flex-col items-center justify-center h-full gap-y-2'>
              <h1 className='inline-flex items-center justify-center gap-2'>
                <span className='text-7xl font-bold tracking-wide'>12</span>
                <span className='text-xl'>of</span>
                <span className='text-4xl font-medium text-muted-foreground'>
                  33
                </span>
              </h1>
              <h2 className='uppercase text-lg text-center'>
                Active Habit trackers
              </h2>
            </div>
          </div>
          {/* Card-1 */}
          <div className='bg-amber-100 border-2 border-teal-900 rounded-md hover:shadow hover:-rotate-3 transition-all'>
            <div className='flex flex-col items-center justify-center h-full gap-y-2'>
              <h1 className='inline-flex items-center justify-center gap-2'>
                <span className='text-7xl font-bold tracking-wide'>12</span>
                <span className='text-xl'>of</span>
                <span className='text-4xl font-medium text-muted-foreground'>
                  33
                </span>
              </h1>
              <h2 className='uppercase text-lg text-center'>
                Active Habit trackers
              </h2>
            </div>
          </div>
          {/* Card-1 */}
          <div className='bg-amber-100 border-2 border-teal-900 rounded-md hover:shadow hover:-rotate-3 transition-all'>
            <div className='flex flex-col items-center justify-center h-full gap-y-2'>
              <h1 className='inline-flex items-center justify-center gap-2'>
                <span className='text-7xl font-bold tracking-wide'>12</span>
                <span className='text-xl'>of</span>
                <span className='text-4xl font-medium text-muted-foreground'>
                  33
                </span>
              </h1>
              <h2 className='uppercase text-lg text-center'>
                Active Habit trackers
              </h2>
            </div>
          </div>
        
        </div>
      </div>
      {/* Avtive Habit Trackers */}
      {/* Graphs */}
    </div>
  );
}

export default DashboardPage