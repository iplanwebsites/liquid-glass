// demo/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

createApp(App).mount('#app');

// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: {
        'liquid-glass': resolve(__dirname, 'src/index.js'),
        'vanilla': resolve(__dirname, 'src/vanilla/index.js'),
        'react': resolve(__dirname, 'src/react/LiquidGlass.jsx'),
        'vue': resolve(__dirname, 'src/vue/LiquidGlass.vue')
      },
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue', 'react', 'react-dom'],
      output: {
        globals: {
          vue: 'Vue',
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
          return assetInfo.name;
        }
      }
    }
  }
});

// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Liquid Glass - Vue Demo</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/demo/main.js"></script>
  </body>
</html>

// demo/style.css
/* Additional demo-specific styles can go here */
/* The main styles are already in App.vue */