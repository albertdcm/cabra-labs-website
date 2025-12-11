import { defineConfig } from "vite";

export default defineConfig({
  // La carpeta real del proyecto Vite
  root: "cabra-labs-website",

  // Como usas dominio propio (cabralabs.com), la base es la raíz
  base: "/",

  // Dónde queremos que salga el build final
  build: {
    outDir: "../dist",   // genera /dist en la raíz del repo
    emptyOutDir: true,   // limpia la carpeta antes de generar
  },
});

