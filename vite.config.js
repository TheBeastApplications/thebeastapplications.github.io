import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: "/thebeastapplications.github.io/",
  server: {
    host: true,
    port: '8080',
    hot: true
},
})
