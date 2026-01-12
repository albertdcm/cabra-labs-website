// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/", // para dominio propio (cabralabs.com)
  build: {
    outDir: "docs",      // IMPORTANTÍSIMO si GitHub Pages sirve /docs
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        gala: resolve(__dirname, "gala.html"),
        bruno: resolve(__dirname, "bruno.html"),
        nia: resolve(__dirname, "nia.html"),

        // ✅ agrega estas 3
        faq: resolve(__dirname, "faq.html"),
        terms: resolve(__dirname, "terms.html"),
        privacy: resolve(__dirname, "privacy.html"),
      },
    },
  },
});