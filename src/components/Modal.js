import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { IoClose } from 'react-icons/io5';
import Backdrop from './Backdrop';
import ThemeContext from '../contexts/ThemeContext';

const ModalOverlay = (props) => {
  return (
    <div className=''>
      <header className='flex justify-between items-center border-b border-b-zinc-700 pb-1'>
        <h2 className='text-base'>About</h2>
        <button className='h-10 w-10 rounded'>
          <IoClose className='h-8 w-10' onClick={props.onCancel} />
        </button>
      </header>
      <main className='my-2'>
        <p className='text-sm mb-2'>
          Santa dashboard created for{' '}
          <a
            target='_blank'
            rel='noreferrer'
            className='underline'
            href='https://github.com/chingu-hackathons/holidayhackathon2021'
          >
            Chingu Holiday Hackathon 2021
          </a>
        </p>
        <div>
          <p className='text-sm'>Tech stack:</p>
          <ul className='list-disc text-sm ml-6'>
            <li>React</li>
            <li>Tailwindcss</li>
            <li>Chart.js</li>
            <li>react-chartjs-2</li>
          </ul>
        </div>
      </main>
      <footer className='my-2 text-sm'>
        <p>Made by Emir Al</p>
        <ul className='list-disc text-sm ml-6 '>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              className='underline'
              href='https://github.com/themythia'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              className='underline'
              href='https://emir.al'
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              className='underline'
              href='https://github.com/chingu-hackathons/frosty'
            >
              Source Code
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

const Modal = (props) => {
  const { theme } = useContext(ThemeContext);
  const bg = theme === 'light' ? 'bg-zinc-100' : 'bg-zinc-900';
  const text = theme === 'light' ? 'text-zinc-800' : 'text-zinc-200';
  const content = (
    <React.Fragment>
      <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={150}
        classNames={{
          enter: 'opacity-0 scale-50',
          enterActive:
            'opacity-100 scale-100 translate-x-0 transition-all duration-150',
          exit: 'opacity-100',
          exitActive: 'opacity-0 scale-50 transition-all duration-150',
        }}
      >
        <div
          className={`fixed z-50 w-10/12 left-[calc(100vw/12)] top-4 md:top-14 rounded p-2 ${bg} ${text}`}
        >
          <ModalOverlay
            header='tetst-header'
            onCancel={props.onCancel}
            type={props.type}
          />
        </div>
      </CSSTransition>
      {props.show && <Backdrop onClick={props.onCancel} />}
    </React.Fragment>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};
export default Modal;
