import React from 'react';
import { useForm } from 'react-hook-form';
import "../../styles/Formulario.scss";

const Formulario = () => {

  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
console.log(data);
  }

  return (
    <div className='formulario'>
      <h2>Registro de usuario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input type="text" name="" />
        </div>
        <div>
          <label>Direccion</label>
          <input type="text" name="" />
        </div>
        <div>
          <label>Edad</label>
          <input type="text" name="" />
        </div>
        <div>
          <label>Pais</label>
          <select>
            <option value="es">España</option>
            <option value="it">Italia</option>
            <option value="fr">Francia</option>
          </select>
        </div>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default Formulario;