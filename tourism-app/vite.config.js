import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // أضيفي هذا السطر

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // أضيفي هذا السطر هنا
  ],
})