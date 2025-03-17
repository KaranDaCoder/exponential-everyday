import Link from 'next/link';
import MobileNavDrawer from './MobileNavDrawer';
import UserDropDown from './UserDropDown';
import { auth, signIn } from '@/lib/auth/auth';
import LoginSignUp from './LoginSignUp';


const Navbar = async() => {
  const session = await auth();
  return (
    <nav className='h-16 z-50 flex items-center justify-between sticky top-0'>
      <Link
        href={'/'}
        className='uppercase text-xl font-semibold tracking-widest flex'
      >
        <span className='px-2 py-1 border-2 flex rounded-l-md border-teal-900 bg-teal-900 text-teal-50'>
          E<span className='hidden lg:block'>xponential</span>
        </span>
        <span className='px-2 py-1 border-2 flex rounded-r-md border-teal-900 bg-white text-teal-900'>
          E<span className='hidden lg:block'>veryday</span>
        </span>
      </Link>

      <div className="hidden lg:block">
      {session ? <UserDropDown userImg={session.user?.image!}/> : <LoginSignUp/>}
      </div>
      <div className="block lg:hidden">
      {session ? <MobileNavDrawer/> : <LoginSignUp/>}
      </div>
    </nav>
  );
};

export default Navbar;
