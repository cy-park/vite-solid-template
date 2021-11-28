import path from 'path'
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [solidPlugin(), WindiCSS()],
  build: {
    target: 'esnext',
    // polyfillDynamicImport: false,
  },
	resolve: {
    alias: {
      'T': path.resolve(__dirname, 'types'),
      '@': path.resolve(__dirname, 'src'),
      'Pages': path.resolve(__dirname, 'src/pages'),
      'Comps': path.resolve(__dirname, 'src/comps'),
    },
	}
});
