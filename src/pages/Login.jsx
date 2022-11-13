import React from 'react'
import Formulario from '../components/Formulario/Formulario'
import Header from '../components/Header/Header'

const Login = (type) => {
  return (
    <>
        <Header />
        <Formulario  type= "login"/>
    </>
  )
}

export default Login