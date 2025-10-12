import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Theme error:', error);
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return { darkMode, toggleDarkMode };
};