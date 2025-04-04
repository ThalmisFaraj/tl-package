import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    plugins: [svelte()],
    root: isDev ? 'demo' : '.', // only use 'demo' for dev
    appType: isDev ? 'spa' : 'library',
    build: {
      lib: {
        entry: 'src/index.js',
        name: 'TlTestPackage',
           formats: ['es', 'umd'], 
        fileName: (format) => `index.${format}.js`
      },
      rollupOptions: {
        external: ['svelte'],
        output: {
          globals: {
            svelte: 'Svelte'
          }
        }
      }
    },
    server: {
      open: true
    }
  };
});
