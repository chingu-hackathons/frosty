import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Dropdown from './Dropdown';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-zinc-100 dark:bg-zinc-900 h-12 shadow-md dark:shadow-black/30 flex items-center justify-between px-4 w-screen'>
      <h5 className='text-lg'>Santa Dashboard</h5>
      <button className='h-10 w-10' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <IoClose className='h-8 w-10' />
        ) : (
          <IoMenu className='h-8 w-10' />
        )}
      </button>
      <Dropdown menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};
export default Header;
