import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": resolve(__dirname, "./src"),
  },
  plugins: [
    vue(),
    WindiCSS({
      preflight: false,
      attributify: true,
    }),
  ],
});
