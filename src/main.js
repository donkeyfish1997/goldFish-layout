import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faSearch,
  faAngry,
  faFileAlt,
  faArchive,
  faTruck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faAngleRight,
  faSearch,
  faAngry,
  faFileAlt,
  faArchive,
  faTruck,
  faCheckCircle
);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
createApp(App)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
