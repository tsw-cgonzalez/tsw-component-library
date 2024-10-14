import { sync } from "glob"

export default {
    root: "./src/pages",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: sync("./src/pages/**/*.html")
        }
    }
}