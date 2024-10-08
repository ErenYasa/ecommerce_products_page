import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3005,
        open: true,
        host: "0.0.0.0",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@views": path.resolve(__dirname, "./src/views"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@hooks": path.resolve(__dirname, "./src/hooks/"),
            "@icons": path.resolve(__dirname, "./src/icons/"),
            "@types": path.resolve(__dirname, "./src/types/"),
            "@store": path.resolve(__dirname, "./src/store/"),
            "@services": path.resolve(__dirname, "./src/services/"),
        },
    },
});
