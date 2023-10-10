import Ava from "./Ava/Ava";
import Menu from "./Menu/Menu";
import "./Header.modules.css";
import { useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items1 = [
    { value: "Зараз у кіно", href: "/main" },
    { value: "Скоро у прокаті", href: "/future" },
    { value: "Купити попкрон онлайн", href: "/eat" },
    { value: "Акції та знижки", href: "/act" },
    { value: "Кінотеатри", href: "/kino" },
    { value: "Повернення квитків", href: "/bilet" },
    { value: "Допомога", href: "/help" },
    { value: "Про компанію", href: "/company" },
  ];
  // const items2 = [
  //   { value: "Сейчас в кино", href: "/main" },
  //   { value: "Скоро в прокате", href: "/future" },
  //   { value: "Купить попкорн онлайн", href: "/eat" },
  //   { value: "Акции и скидки", href: "/act" },
  //   { value: "Кинотеатры", href: "/kino" },
  //   { value: "Возврат билетов", href: "/bilet" },
  //   { value: "Помощь", href: "/help" },
  //   { value: "О компании", href: "/company" },
  // ];
  return (
    <div>
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <Ava />
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Multiplex"}
        items1={items1}
      />
    </div>
  );
};
export default Header;
