import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  if (mode === 'demo') {
    // Demo build configuration
    return {
      plugins: [vue()],
      root: './demo',
      base: '/liquid-glass/',
      resolve: {
        alias: {
          '@': resolve(__dirname, './src')
        }
      },
      build: {
        outDir: '../dist/demo',
        emptyOutDir: false
      }
    };
  }
  
  // Library build configuration
  return {
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
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => {
          if (format === 'es') return `${entryName}.esm.js`;
          return `${entryName}.js`;
        }
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
  };
});