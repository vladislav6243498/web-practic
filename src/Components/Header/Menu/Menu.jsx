import React from "react";
import "./Menu.modules.css";
import { ImFacebook2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../../../18n";

const Menu = ({ header, items1, active, setActive }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div
      add
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">
          <button className="bbat1" onClick={() => changeLanguage("ua")}>
            UA
          </button>
          <button className="bbat2" onClick={() => changeLanguage("ru")}>
            RU
          </button>
          <div>{t("text")}</div>
          {header}

          <div className="lUa">
            <ul>
              {items1.map((item) => (
                <li>
                  <a href={item.href}>{item.value}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        ;
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
