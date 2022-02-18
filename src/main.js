import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";

import "virtual:windi.css";
import "virtual:windi-devtools";
import 'virtual:svg-icons-register'

createApp(App).use(router).mount("#app");
