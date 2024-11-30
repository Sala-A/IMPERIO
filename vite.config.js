import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/IMPERIO/', // Cambia "IMPERIO" si el repositorio tiene otro nombre
  plugins: [react()],
});

