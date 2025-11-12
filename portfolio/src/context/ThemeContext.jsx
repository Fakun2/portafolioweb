import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// Contexto global para compartir el estado del tema en toda la aplicación
const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {}, applyStoredTheme: () => {} });

const setDocumentTheme = (mode) => {
  const root = document.documentElement;
  if (mode === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem('portfolio-theme', mode);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const applyTheme = useCallback((nextTheme) => {
    setDocumentTheme(nextTheme);
    setTheme(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      setDocumentTheme(next);
      return next;
    });
  }, []);

  const applyStoredTheme = useCallback(() => {
    const stored = localStorage.getItem('portfolio-theme');
    applyTheme(stored ?? 'dark');
  }, [applyTheme]);

  useEffect(() => {
    applyStoredTheme();
  }, [applyStoredTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event) => applyTheme(event.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [applyTheme]);

  const value = useMemo(
    () => ({ theme, toggleTheme, applyStoredTheme }),
    [theme, toggleTheme, applyStoredTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;