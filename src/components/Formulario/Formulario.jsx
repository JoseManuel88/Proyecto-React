import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, newUser } from "../../redux/auth/auth.actions";
import { useForm } from "react-hook-form";
import "../../styles/Formulario.scss";
import { postNewComment } from "../../redux/comment/comment.actions";

const Formulario = (type) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [form, setform] = useState(type.type);
  const [password, setpassword] = useState("");

  const handlePassword = (event) => {
    setpassword(event.target.value);
  };

  const login = (data) => {
    dispatch(loginUser(data, navigate));
  };

  const regist = (data) => {
    dispatch(newUser(data, navigate));
  };

  const comment = (data) => {
    dispatch(postNewComment(data, navigate));
  };

  return (
    <div className="formulario">
      {form === "login" && (
        <>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(login)}>
            <div className="inputForm">
            <label htmlFor="email">
                <p>Email</p>
              </label>
              <input
              id="email"
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              {errors.email?.type === "required" && <p>El campo email es requerido</p>}
              {errors.email?.type === "pattern" && <p>El formato del email es incorrecto</p>}
            </div>
            <div className="inputForm">
            <label htmlFor="password">
                <p>Password</p>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password?.type === "required" && <p>El campo password es requerido</p>}
            </div>

            <input type="submit" value="Enviar" />
            <p className="login--p" onClick={() => setform("regist")}>¿Aún no tienes cuenta? <span>Registrate aquí</span></p>
          </form>
        </>
      )}

      {form === "regist" && (
        <>
          <h2>Registro</h2>
          <form onSubmit={handleSubmit(regist)}>
            <div className="inputForm">
              <label htmlFor="username">
                <p>Nombre de Usuario</p>
              </label>
              <input
                id="username"
                type="text"
                {...register("username", {
                  required: true,
                  maxLength: 15,
                })}
              />
              {errors.username?.type === "required" && <p>El campo Nombre de Usuario es requerido</p>}
              {errors.username?.type === "maxLength" && <p>El campo Nombre de Usuario debe tener menos de 15 caracteres</p>}
            </div>
            <label htmlFor="email">
              <p>Email</p>
            </label>
            <div className="inputForm">
              <input
                id="email"
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              {errors.email?.type === "required" && <p>El campo Email es requerido</p>}
              {errors.email?.type === "pattern" && <p>El formato del Email es incorrecto</p>}
            </div>
            <label htmlFor="password">
              <p>Password</p>
            </label>
            <div className="inputForm">
              <input
                id="password"
                type="password"
                onInput={(event) => handlePassword(event)}
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Introduce mínimo 8 caracteres",
                  },
                })}
              />
              {errors.password?.type === "required" && <p>El campo Password es requerido</p>}
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <label htmlFor="password_repeat">
              <p>Repite el password</p>
            </label>
            <div className="inputForm">
              <input
                id="password_repeat"
                type="password"
                {... register("password_repeat", {
                  required: true,
                  validate: (value) =>
                    value === password || "Los password no coinciden",
                })}
              />
                {errors.password_repeat?.type === "required" && <p>El campo Repetir Password es requerido</p>}
                {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

            </div>

            <input type="submit" value="Enviar" />
          </form>
          <p onClick={() => setform("login")}>¿Ya tienes cuenta de usuario? <span>Click aqui para entrar</span></p>
        </>
      )}
      {form === 'comment' && (
        <>
         <form id="commentform" onSubmit={handleSubmit(comment)}>
         <input type="text"  {...register("author", {
                  required: true,
                })}>{localStorage.userId}</input>
          <textarea form="commentform" {...register("text", {
                  required: true,
                  maxLength: 15,
                })}></textarea>
          <button type="submit" >Comenta</button>
         </form>
        </>
      )}
    </div>
  );
};

export default Formulario;
