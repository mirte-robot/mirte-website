import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from "vue-i18n";


// import translations
import nl from "../locales/nl.json";
import en from "../locales/en.json";

// configure i18n
const persistedLocale = localStorage.getItem("user-locale")
const i18n = createI18n({
  locale: persistedLocale ? persistedLocale : "en",
  fallbackLocale: "en",
  messages: { nl, en },
});

// create and start the app
const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");
