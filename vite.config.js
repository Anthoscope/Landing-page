import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This makes all paths relative, which is safest for GitHub Organizations
  base: './', 
})