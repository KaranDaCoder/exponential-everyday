import React from 'react'

const PageHeader = ({header} : {header : string}) => {
  return (
    <section className=' text-teal-900 w-full flex items-center justify-between mt-2 space-x-2 py-3'>
      <h1 className='font-light text-xl '>{header}.</h1>
      <h2 className='text-sm font-semibold text-muted-foreground'>
        March 17, 2025
      </h2>
    </section>
  );
}

export default PageHeader