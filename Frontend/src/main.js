import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";

createApp(App)
  .use(store)
  .use(SetupCalendar)
  .component("Calendar", Calendar)
  .component("DatePicker", DatePicker)
  .use(router)
  .mount("#app");
