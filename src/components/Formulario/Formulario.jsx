import React from 'react';
import { errors, useForm } from 'react-hook-form';
import "../../styles/Formulario.scss";

const Formulario = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
console.log(data);
  }

  return (
    <div className='formulario'>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='inputForm'>
          
          <input type="text" {...register('nombre', {
            required: true,
            maxLength: 15

          })} placeholder='Nombre de ususario'/>
          {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
          {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 15 caracteres</p>}
        </div>
        <div className='inputForm'>
         
          <input type="email" {...register('email', {
           pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} placeholder='Introduce tu email' />
          {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
        </div>
        <div className='inputForm'>
          <input type="text" {...register('contraseña', {
            required:true
          })} placeholder='Contraseña'/>
        </div>
        
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default Formulario;