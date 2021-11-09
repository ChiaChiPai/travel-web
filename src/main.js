import { createApp } from "vue";
import router from "../router/index.js";
import store from "vuex";
import App from "./App.vue";
import "virtual:windi.css";
import "virtual:windi-devtools";

createApp(App).use(router).use(store).mount("#app");
