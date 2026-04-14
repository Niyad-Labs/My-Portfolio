import { defineConfig } from 'vite'

export default defineConfig({
    base: '/My-Portfolio/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                certificates: 'certificates.html',
            }
        }
    }
})