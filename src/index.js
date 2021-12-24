import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThemeWrapper from './components/ThemeWrapper';
import Header from './components/Header';
import ThemeContext from './contexts/ThemeContext';
import CalorieContext from './contexts/CalorieContext';
import { calorieReducer, defaultState } from './reducers/calorieReducer';
import Dashboard from './components/Dashboard';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [calorieData, dispatch] = useReducer(calorieReducer, defaultState);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CalorieContext.Provider value={{ calorieData, dispatch }}>
        <ThemeWrapper>
          <Header />
          <Dashboard />
        </ThemeWrapper>
      </CalorieContext.Provider>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
