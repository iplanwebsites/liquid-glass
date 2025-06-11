import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: {
        'liquid-glass': 'src/index.js',
        'vanilla': 'src/vanilla/index.js',
        'react': 'src/react/LiquidGlass.jsx',
        'vue': 'src/vue/LiquidGlass.vue'
      },
      name: 'LiquidGlass',
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
})