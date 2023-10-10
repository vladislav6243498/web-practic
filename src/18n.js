import RU from "./trans/ru.json";
import UA from "./trans/ua.json";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
  UA: {
    translation: UA,
  },
  RU: {
    translation: RU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: JSON.parse(localStorage.getItem("language")),
  fallbacking: "RU",
});

export default i18n;
