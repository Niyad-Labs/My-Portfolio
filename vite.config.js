import { defineConfig } from 'vite'

export default defineConfig({
    base: '/My-Portfolio/',
    server: {
        host: true,
    },
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                certificates: 'certificates.html',
            }
        }
    }
})