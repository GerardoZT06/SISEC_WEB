import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';


export default defineConfig({
  esbuild: {
    loader: {
      '.css': 'css' // Agrega esta línea para especificar cómo manejar los archivos CSS
    },
  },
  plugins: [react()],
});
