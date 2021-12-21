import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Dropdown from './Dropdown';
import { CSSTransition } from 'react-transition-group';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-zinc-100 dark:bg-zinc-900 h-12 shadow-md dark:shadow-black/30 flex items-center justify-between px-4'>
      <h5 className='text-lg'>Santa Dashboard</h5>
      <button className='h-10 w-10' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <IoClose className='h-8 w-10' />
        ) : (
          <IoMenu className='h-8 w-10' />
        )}
      </button>
      <CSSTransition
        in={menuOpen}
        unmountOnExit
        timeout={150}
        classNames={{
          enter: 'opacity-0',
          enterActive: 'opacity-100 translate-x-0 transition-all duration-150',
          exit: 'opacity-100',
          exitActive: 'opacity-0 scale-0 transition-all duration-150',
        }}
      >
        <Dropdown />
      </CSSTransition>
    </header>
  );
};
export default Header;
