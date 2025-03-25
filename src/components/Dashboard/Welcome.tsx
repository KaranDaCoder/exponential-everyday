
const Welcome = ({username} : {username : string}) => {
  return (
    <div className='flex flex-col items-start justify-center w-full gap-2 lg:w-1/2'>
      <h1 className='w-full text-4xl font-light'>
        Hey, <span className='text-5xl capitalize text-muted-foreground'>{username}!</span>
      </h1>
      <h2 className='w-full px-4 text-lg font-light text-center text-white bg-teal-800 rounded-md shadow'>
        It is good to see you today.
      </h2>
      <p className="italic text-muted-foreground">some bakchodi by some famous author in 10-20 words</p>
    </div>
  );
}

export default Welcome
