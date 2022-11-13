import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/auth/auth.actions";
import "../../styles/Header.scss";

const Header = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const dispatch = useDispatch();

  let user = localStorage.user;

  const logout = (data) => {
    dispatch(logoutUser(data));
  };

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
        <NavLink to="/">
          <h2>Recetario de la abuela</h2>
        </NavLink>
      </div>
      <nav className="navbar">
        {user && (
          <div className="logged-user">
            <p>{user}</p>
          </div>
        )}
        <ul>
          <NavLink to="/recetas-caseras" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            Recetas caseras
          </NavLink>
          <NavLink to="/ensaladas" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            Ensaladas
          </NavLink>
          <NavLink to="/postres" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            Postres
          </NavLink>
          <NavLink to="/helados" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            Helados
          </NavLink>
        </ul>
        <div className="login">
          {!user && (
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              Login/Registro
            </NavLink>
          )}
          {user && (
            <a href="#" onClick={() => logout()}>
              Cerrar sesion
            </a>
          )}
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
