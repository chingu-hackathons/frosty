const Backdrop = (props) => {
  return (
    <div
      className='fixed top-0 left-0 w-full h-screen bg-black/75 z-10'
      onClick={props.onClick}
    ></div>
  );
};
export default Backdrop;
