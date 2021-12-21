import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThemeWrapper from './components/ThemeWrapper';

const App = () => {
  return (
    <ThemeWrapper>
      <p>Hello world</p>
    </ThemeWrapper>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
