import React, { useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "../../styles/Header.scss";

const Header = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="header">
      <div className="logo">
        <h2>Recetario de la abuela</h2>
      </div>
      <nav className="navbar">
        <ul>
          <a href="#">
            <li>Recetas caseras </li>
          </a>
          <a href="#">
            <li>Ensaladas</li>
          </a>
          <a href="#">
            <li>Postres</li>
          </a>
          <a href="#">
            <li>Helados</li>
          </a>
        </ul>
        <div className="login">
          <a href="#">
            <p>Login/registro</p>
          </a>
        </div>
      </nav>
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>
      <div className={menu_class}>
        <DropdownMenu />
      </div>
    </div>
  );
};

export default Header;
