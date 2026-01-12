// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "docs",          // (si usas GitHub Pages desde /docs)
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        gala: resolve(__dirname, "gala.html"),
        bruno: resolve(__dirname, "bruno.html"),
        nia: resolve(__dirname, "nia.html"),
        privacy: resolve(__dirname, "privacy.html"),
        terms: resolve(__dirname, "terms.html"),
        faq: resolve(__dirname, "faq.html"), // si también la quieres
      },
    },
  },
});
