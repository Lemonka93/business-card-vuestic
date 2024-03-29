import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/dist/styles/essential.css";
import "vuestic-ui/dist/vuestic-ui.css";
import "vuestic-ui/dist/styles/grid/grid.scss";
import "vuestic-ui/dist/styles/global/normalize.scss";
import "vuestic-ui/dist/styles/global/typography.scss";

createApp(App).use(router).use(createVuestic()).mount("#app");
