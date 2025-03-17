
const Welcome = ({username} : {username : string}) => {
  return (
    <div className='gap-2 flex flex-col items-center justify-center lg:w-1/2 w-full'>
      <h1 className='text-4xl w-full font-light'>
        Hey, <span className='text-5xl text-muted-foreground'>{username}!</span>
      </h1>
      <h2 className='text-lg px-4 font-light text-white bg-green-600 rounded-md shadow w-full text-center'>
        It is good to see you today.
      </h2>
    </div>
  );
}

export default Welcome
