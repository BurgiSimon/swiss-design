import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Tailwind v4 runs as a Vite plugin; tokens live in src/index.css @theme.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
