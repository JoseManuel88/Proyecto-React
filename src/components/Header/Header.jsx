import React from 'react'
import './Header.scss';
const Header = () => {
  return (
    <div className='header'>
      <h2>Hola que ase!!</h2>
      <div className='logo'>
        <p>Recetas</p>
      </div>
      <nav className='navbar'>
        <ul>
          <li>Recetas caseras </li>
          <li>Ensaladas</li>
          <li>Postres</li>
          <li>Helados</li>
        </ul>
        
        <div className='login'>
          <p>
            Login/registro
          </p>
        </div>
        </nav>
      
        
    </div>
  )
}

export default Header;