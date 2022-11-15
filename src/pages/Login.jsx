import React, { useEffect } from "react";
import Formulario from "../components/Formulario/Formulario";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";

const Login = (type) => {
  const navigate = useNavigate();
  const user = localStorage.user;

  useEffect(() => {
    user && navigate('/')
  }, [user]);
  return (
    <>
      {!user && (
        <>
          <Header />
          <Formulario type="login" />
        </>
      )}
    </>
  );
};

export default Login;
