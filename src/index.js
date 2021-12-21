import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThemeWrapper from './components/ThemeWrapper';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeWrapper>
      <Header />
    </ThemeWrapper>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
