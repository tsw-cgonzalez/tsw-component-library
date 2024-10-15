import { sync } from "glob"
import { defineConfig } from "vite"


export default defineConfig({
    root: "./src/pages",
    server: {
      base: '/pages',
      watch: {
        usePolling: true
        }
    },
    build: {
        cssCodeSplit: true,
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: sync("./src/pages/**/**/*.html"),
            output: {
                manualChunks: {

                }
            }
        }
    }
})