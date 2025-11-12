/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        neon: {
          cyan: '#22d3ee',
          purple: '#a855f7',
          blue: '#6366f1'
        }
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.15) 1px, transparent 0)',
        'hero-gradient': 'linear-gradient(135deg, rgba(56, 189, 248, 0.35), rgba(99, 102, 241, 0.35))'
      }
    }
  },
  plugins: []
};