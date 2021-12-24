import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  const content = (
    <div
      className='fixed top-0 left-0 w-full h-screen bg-black/75 z-10'
      onClick={props.onClick}
    ></div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById('backdrop-hook')
  );
};
export default Backdrop;
