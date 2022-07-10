import { defineConfig } from "vite";

export default defineConfig(() => ({
  server: {
    port: 3030,
  },
  clearScreen: false,
  publicDir: false,
}));
