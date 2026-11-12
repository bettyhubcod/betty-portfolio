import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base "/" works with a custom domain (or a username.github.io repo).
export default defineConfig({
  plugins: [react()],
  base: '/betty-portfolio/',
})
