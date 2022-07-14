import { createApp } from "vue";
import { createPinia } from "pinia";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(fas, fab);

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App).component("fa", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
