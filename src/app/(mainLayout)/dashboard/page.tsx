import PageHeader from "@/components/common/PageHeader";
import ProgressCard from "@/components/Dashboard/ProgressCard";
import Welcome from "@/components/Dashboard/Welcome";

const DashboardPage = () => {
  return (
    <div className=''>
      <PageHeader header='Dashboard' />

      <div className='flex flex-col lg:flex-row min-h-64 lg:gap-6 gap-y-4'>
        {/* WELCOME */}
        <Welcome username='Potato' />

        {/* PROGRESS CARDS */}
        <div className='lg:w-3/4 w-full gap-3 grid lg:grid-cols-2 grid-cols-1'>
          {/* Card-1 : STRENGTH */}
          <ProgressCard
            bgColor='bg-green-100'
            count={0}
            label={'On target!'}
          />
          {/* Card-1 : ACTIVE HT */}
          <ProgressCard
            bgColor='bg-yellow-100'
            count={0}
            total={0}
            label='Active habit trackers'
          />
          {/* Card-1 : ACTIVE HABITS */}
          <ProgressCard
            bgColor='bg-orange-100'
            count={0}
            total={0}
            label='Active habits'
          />
          {/* Card-1 : UPCOMING HABITS */}
          <ProgressCard
            bgColor='bg-stone-100'
            count={0}
            total={0}
            label='upcoming habits'
          />
        </div>
      </div>
      {/* Avtive Habit Trackers */}
      {/* Graphs */}
    </div>
  );
}

export default DashboardPage