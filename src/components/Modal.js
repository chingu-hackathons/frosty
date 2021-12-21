import React from 'react';
import ReactDOM from 'react-dom';

import { IoClose } from 'react-icons/io5';
import Backdrop from './Backdrop';

const ModalOverlay = (props) => {
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
  // return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  console.log('props.onCancel', props.onCancel);
  const content = (
    <div className='fixed z-50 w-10/12 left-[calc(100vw/12)] top-14 bg-zinc-200 dark:bg-zinc-800 rounded'>
      <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <ModalOverlay header='tetst-header' onCancel={props.onCancel} />
      </React.Fragment>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};
export default Modal;
