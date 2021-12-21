import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThemeWrapper from './components/ThemeWrapper';
import Header from './components/Header';
import ThemeContext from './contexts/ThemeContext';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeWrapper>
        <Header />
      </ThemeWrapper>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
