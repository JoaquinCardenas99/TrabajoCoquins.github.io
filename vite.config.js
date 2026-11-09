import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [react()],

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/Tests/setup.js",

    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: [
        "src/componentes/**/*.{js,jsx}",
        "src/servicios/**/*.{js,jsx}",
        "src/Servicios/**/*.{js,jsx}"
      ]
    }
  }
})
