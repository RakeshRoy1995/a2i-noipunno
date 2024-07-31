import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', port : "5179",

    proxy: {
      '/objapi': {
        target: 'https://ekshop-com-bd-v3.sgp1.vultrobjects.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/objapi/, ''),
      },
    },
    
  },



})
