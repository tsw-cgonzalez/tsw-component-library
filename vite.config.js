import { sync } from "glob"
import { defineConfig } from "vite"


export default defineConfig({
    root: "./src/pages",
    server: {
        watch: {
            usePolling: true
        }
    },
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: sync("./src/pages/**/**/*.html")
        }
    }
})