import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "index.html"),
        background: resolve(__dirname, "src/background.ts"),
      },
      output: {
        entryFileNames: (chunk) => {
          // Ensure background file is named properly
          return chunk.name === "background"
            ? "background.js"
            : "assets/[name].js";
        },
      },
    },
  },
});
