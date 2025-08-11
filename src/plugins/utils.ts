import type { App } from "vue";
import * as helpers from "@/utils/helpers";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $utils: typeof helpers;
  }
}

export default {
  install(app: App) {
    app.config.globalProperties.$utils = helpers;
  },
};
