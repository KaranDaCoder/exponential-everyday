interface IProgressCard {
 bgColor : string,
 count : number,
 total? : number,
 label : string
}

const ProgressCard = ({bgColor, count, total, label} : IProgressCard) => {
  return (
    <div
      className={`${bgColor} border-2 border-teal-900 rounded-md hover:shadow-2xl hover:-rotate-3 transition-all py-1 lg:py-0`}
    >
      <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='inline-flex items-center justify-center gap-2'>
          <span className='text-6xl lg:text-7xl font-medium tracking-wide'>
            {(!label.includes('target')) ?  count : <span>{count}%</span>}
          </span>
          {(!label.includes('target')) && <span className='text-lg lg:text-xl'>of</span>}
          {(!label.includes('target')) && (
            <span className='text-2xl lg:text-4xl font-light text-muted-foreground'>
              {total}
            </span>
          )}
        </h1>
        <h2 className='capitalize text-lg font-medium tracking-wider text-center'>
          {label}
        </h2>
      </div>
    </div>
  );
}

export default ProgressCard