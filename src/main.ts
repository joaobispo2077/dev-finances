import { createApp } from "vue";
import App from "./App.vue";
import { store, keyStore } from "./store";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.use(store, keyStore);
app.use(MotionPlugin);

app.mount("#app");
