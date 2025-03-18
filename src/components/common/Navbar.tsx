import Link from 'next/link';
import MobileNavDrawer from './MobileNavDrawer';
import UserDropDown from './UserDropDown';
import { auth} from '@/lib/auth/auth';
import LoginSignUp from './LoginSignUp';


const Navbar = async() => {
  const session = await auth();
  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between h-16'>
      <Link
        href={'/'}
        className='flex text-xl font-semibold tracking-widest uppercase'
      >
        <span className='flex px-2 py-1 bg-teal-900 border-2 border-teal-900 rounded-l-md text-teal-50'>
          E<span className='hidden lg:block'>xponential</span>
        </span>
        <span className='flex px-2 py-1 text-teal-900 bg-white border-2 border-teal-900 rounded-r-md'>
          E<span className='hidden lg:block'>veryday</span>
        </span>
      </Link>

      <div className="hidden lg:block">
      {session ? <UserDropDown userImg={session.user?.image ? session.user.image : "" }/> : <LoginSignUp/>}
      </div>
      <div className="block lg:hidden">
      {session ? <MobileNavDrawer/> : <LoginSignUp/>}
      </div>
    </nav>
  );
};

export default Navbar;
