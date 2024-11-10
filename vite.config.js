import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/blood-glucose-control-live-demo/",
  plugins: [react()],
})
