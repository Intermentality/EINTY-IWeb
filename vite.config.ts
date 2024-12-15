import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/einty-iweb/',
  plugins: [
    react(),
    glsl(),
    ],

  assetsInclude: ["**/*.GLSL", "assets/*"],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, "./src/Components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      pages: path.resolve(__dirname, "./src/Pages/")
    },
  },
})
