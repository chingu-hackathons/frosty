import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { IoClose } from 'react-icons/io5';
import Backdrop from './Backdrop';
import ThemeContext from '../contexts/ThemeContext';

const ModalOverlay = (props) => {
  switch (props.type) {
    case 'how':
      return (
        <div>
          <header className='flex justify-between border-b border-b-black pb-2'>
            <h2 className='text-2xl'>How it works?</h2>
            <button className='h-10 w-10 rounded'>
              <IoClose className='h-8 w-10' onClick={props.onCancel} />
            </button>
          </header>
          <main className='pt-2'>test</main>
        </div>
      );
    case 'about':
      return;
    default:
      return null;
  }
  return (
    <div>
      <header>
        <h2>{props.header}</h2>
        <button>
          <IoClose onClick={props.onCancel} />
        </button>
      </header>
      <main>test</main>
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
          className={`fixed z-50 w-10/12 left-[calc(100vw/12)] top-14 rounded p-4 ${bg} ${text}`}
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
