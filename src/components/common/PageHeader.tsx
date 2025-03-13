import React from 'react'

const PageHeader = ({header} : {header : string}) => {
  return (
    <section className=' text-teal-900 w-full text-2xl flex items-center justify-start mt-2 space-x-2'>
      <span className='font-semibold'>Karan's</span>
      <h1 className=''>{header}.</h1>
    </section>
  );
}

export default PageHeader