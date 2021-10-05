import { createApp } from "vue";
import App from "./App.vue";
import { store, keyStore } from "./store";

const app = createApp(App);

app.use(store, keyStore);

app.mount("#app");
