import React, { useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ThemeContext from '../contexts/ThemeContext';
import Modal from './Modal';

const Dropdown = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const inverse = theme === 'light' ? 'dark' : 'light';

  const [showModal, setShowModal] = useState(false);

  const toggleTheme = (theme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  const openModal = () => {
    setShowModal(true);
    props.setMenuOpen(false);
  };

  return (
    <React.Fragment>
      <CSSTransition
        in={props.menuOpen}
        unmountOnExit
        timeout={75}
        classNames={{
          enter: 'opacity-0 -translate-y-40',
          enterActive: 'opacity-100 translate-y-0 transition-all duration-75',
          exit: 'opacity-100',
          exitActive: 'opacity-0 -translate-y-40 transition-all duration-75',
        }}
      >
        <div className='absolute right-2 top-14 bg-zinc-100 dark:bg-zinc-900 p-4 rounded shadow-md dark:shadow-black/30 flex flex-col space-y-1 z-20'>
          <button
            className='text-left'
            onClick={() => toggleTheme(theme)}
          >{`Switch to ${inverse} theme`}</button>
          <button className='text-left' onClick={() => openModal()}>
            About
          </button>
        </div>
      </CSSTransition>
      <Modal show={showModal} onCancel={() => setShowModal(false)} />
    </React.Fragment>
  );
};
export default Dropdown;
