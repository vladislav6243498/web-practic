import React from "react";
import "./Menu.modules.css";
import { ImFacebook2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../../hooks/use-localstorage";
import i18n from "../../../18n";
import UaLang from "./Lang/UaL";
import RuLang from "./Lang/RuL";

const Menu = ({ header, item1, item2, active, setActive }) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "RU");
  const handleLenguageChange = () => {
    if (language === "UA") {
      i18n.changeLanguage("RU");
      setLanguage("RU");
    } else if (language === "RU") {
      i18n.changeLanguage("UA");
      setLanguage("UA");
    }
    <RuLang />;
  };

  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <button className="bbat1" onClick={handleLenguageChange}>
          {t("RU")}
        </button>
        {/* <div onClick={handleLenguageChange} className="ex">
          {t("RU")} Hello
        </div> */}

        <button className="bbat2" onClick={handleLenguageChange}>
          {t("UA")}
        </button>
      </div>
      <h1>Особистий кабінет</h1>
      <button className="bat1">Увійти</button>
      <h2>Ми в соціальних мережах</h2>
      <button className="bat2">
        <ImFacebook2 /> Facebook
      </button>
      <button className="bat3">
        <FaYoutube /> Youtube
      </button>
      <button className="bat4">
        <FiInstagram /> Instagram
      </button>
      <button className="bat5">
        <FaTelegram /> Telegram
      </button>
    </div>
  );
};
export default Menu;
