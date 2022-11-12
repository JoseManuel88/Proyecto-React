import "../../styles/DropdownMenu.scss";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <a href="#">
          <li>Login/Registro</li>
        </a>
        <li className="separator"></li>
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
    </div>
  );
};

export default DropdownMenu;
