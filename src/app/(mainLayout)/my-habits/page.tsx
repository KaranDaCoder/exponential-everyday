import { getHabits } from '@/actions/habit'
// import PageHeader from '@/components/common/PageHeader'
import { DateTime } from 'luxon';

const MyHabitsPage = async() => {
  const habits = await getHabits();

  return (
    <div>
      {/* <PageHeader header='Habits' userTz={'America/New_York'}/> */}
      {habits.message?.map(h => (
        <div className="flex gap-2" key={h.id}>
          <p>{h.name}</p>
          <p>{DateTime.fromJSDate(h.start_date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}

export default MyHabitsPage