import DefaultTheme from "vitepress/theme-without-fonts";
import Terminal from "./Terminal.vue";
import ExamplePreview from "../components/ExamplePreview.vue";
import "@xterm/xterm/css/xterm.css";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({app}) {
    app.component("Terminal", Terminal);
    app.component("ExamplePreview", ExamplePreview);
  },
};
