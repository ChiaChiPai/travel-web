import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": `${resolve(__dirname, "src")}`,
    },
  },
  plugins: [
    vue(),
    Components({
      /* options */
    }),
    Pages(),
    WindiCSS(),
    AutoImport({
      imports: ["vue", "vue-router"],
    }),
  ],
});
