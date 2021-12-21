import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const Dropdown = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const inverse = theme === 'light' ? 'dark' : 'light';

  const toggleTheme = (theme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='absolute right-2 top-14 bg-zinc-100 dark:bg-zinc-900 p-4 rounded shadow-md dark:shadow-black/30 flex flex-col space-y-1'>
      <button
        className='text-left'
        onClick={() => toggleTheme(theme)}
      >{`Switch to ${inverse} theme`}</button>
      <button className='text-left'>How it works?</button>
      <button className='text-left'>About</button>
    </div>
  );
};
export default Dropdown;
