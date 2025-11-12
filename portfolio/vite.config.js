import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración de Vite para habilitar React con Fast Refresh
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
});