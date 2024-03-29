import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { Lilita_One } from 'next/font/google';

const lilitaOne = Lilita_One({ weight: '400', subsets: ['latin-ext'] });

const Navbar = () => {
  return (
    <div className='mx-auto max-w-5xl px-6'>
      <div className='flex justify-between items-center h-16 w-full'>
        <Link href='/'>
          <div className={`${lilitaOne.className} text-3xl dark:text-amber-50`}>
            Dev
            <span className='text-purple-500'>Blook</span>
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
