import "../../styles/DropdownMenu.scss";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/auth/auth.actions";

const DropdownMenu = () => {
  const dispatch = useDispatch();

  let user = localStorage.user;

  const logout = (data) => {
    dispatch(logoutUser(data));
  };

  return (
    <div className="dropdown-menu">
      <ul>
        {!user && (
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            Login/Registro
          </NavLink>
        )}
        {user && <p>{user}</p>}
        <li className="separator"></li>
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
        {user && (
          <>
            <li className="separator"></li>
            <NavLink to="/newRecipe" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              Envíanos tu receta
            </NavLink>
            <a href="/" onClick={() => logout()}>
              Cerrar sesion
            </a>
          </>
        )}
      </ul>
    </div>
  );
};

export default DropdownMenu;
