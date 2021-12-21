import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return <p className='text-3xl font-bold underline'>Hello world</p>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
