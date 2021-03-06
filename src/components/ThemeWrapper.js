import { useContext, useEffect } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ThemeWrapper = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  // handles theming
  useEffect(() => {
    // checks localStorage to see if user set a specific theme
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setTheme('dark'); // if users prefers dark theme, sets theme to dark
      }

      // listens for theme preferences and changes the theme accordingly
      const listener = (e) => {
        setTheme(e.matches ? 'dark' : 'light');
      };

      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', listener);

      return () => window.removeEventListener('change', listener);
    }
  }, [theme, setTheme]);
  return (
    <div className={theme}>
      <div className='bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 h-full min-h-screen w-screen'>
        {children}
      </div>
    </div>
  );
};
export default ThemeWrapper;
