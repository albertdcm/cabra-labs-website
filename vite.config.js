// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/", // como tienes dominio propio, la base es la raíz
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),   // home
        gala: resolve(__dirname, "gala.html"),    // /gala.html
        bruno: resolve(__dirname, "bruno.html"),  // /bruno.html
        nia: resolve(__dirname, "nia.html"),      // /nia.html
      },
    },
  },
});
