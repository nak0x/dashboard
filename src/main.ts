// Vue core
import { createApp } from "vue";
import { createPinia } from "pinia";

// Font Awesome core
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Base app view
import App from "./App.vue";

// Plugins
import utilsPlugin from "@/plugins/utils";

// CSS
import "./assets/themes.css";

// Import icons you want
import {
  faGear,
  faTemperatureHalf,
  faNetworkWired,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// Add to library
library.add(faGear, faTemperatureHalf, faNetworkWired, faMagnifyingGlass);

const app = createApp(App);

app.use(createPinia());
app.use(utilsPlugin);

// Register fontawesome globally
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
