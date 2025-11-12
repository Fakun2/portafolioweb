import { useMemo } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import useTheme from '../hooks/useTheme.js';

// Interruptor visual para alternar entre modo claro y oscuro
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300 transition hover:border-neon-cyan hover:text-neon-cyan"
      aria-label="Alternar modo de color"
    >
      {isDark ? <FiMoon className="text-neon-cyan" /> : <FiSun className="text-yellow-300" />}
      {isDark ? 'Oscuro' : 'Claro'}
    </button>
  );
};

export default ThemeToggle;