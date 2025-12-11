// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  // Como usas dominio propio (cabralabs.com), la base es la raíz
  base: "/",

  // Build de producción
  build: {
    outDir: "dist",   // genera la carpeta dist en la raíz del repo
    emptyOutDir: true // limpia dist antes de cada build
  }
});
