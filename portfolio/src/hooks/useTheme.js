import { useTheme as useThemeContext } from '../context/ThemeContext.jsx';

// Hook de conveniencia para acceder al contexto de tema global
const useTheme = () => useThemeContext();

export default useTheme;