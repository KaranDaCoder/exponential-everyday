import { DateTime } from 'luxon';
import React from 'react'

const PageHeader = ({header} : {header : string}) => {
  return (
    <section className='flex items-center justify-between w-full py-3 mt-2 space-x-2 text-teal-900 '>
      <h1 className='text-xl font-light '>{header}.</h1>
      <h2 className='text-sm font-semibold text-muted-foreground'>
        {DateTime.now().toLocaleString(DateTime.DATETIME_FULL)}
      </h2>
    </section>
  );
}

export default PageHeader