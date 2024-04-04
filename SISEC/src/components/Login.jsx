// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate(); // useNavigate para la redirección

  const [email, setEmail] = useState(""); // useState para el estado del correo electrónico
  const [password, setPassword] = useState(""); // useState para el estado de la contraseña

  const handleSubmit = (event) => {
    event.preventDefault();
    // Agrega la lógica de validación del formulario
    if (email === "admin@utez.edu.mx" && password === "contraseña") {


      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: 'Has iniciado sesión correctamente',
        timer: 2000, // Cambia la duración de la alerta a 2 segundos
        showConfirmButton: false
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000); // Redirige después de 2 segundos

      // Si las credenciales son válidas, redirige al dashboard
      navigate("/dashboard");



    } else {
      // Si la validación falla, muestra una alerta de SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Lo sentimos...',
        text: '¡Credenciales inválidas!',
      });
    }
  };

  return (
    <div style={{ backgroundColor: "#002E60", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form style={{ width: "100%", maxWidth: "700px", backgroundColor: "#ffffff", padding: "30px", borderRadius: "15px" }} onSubmit={handleSubmit}>
        <img
          src="/src/assets/img/logoCEL.png"
          alt="logoutez"
          style={{
            width: "250px",
            marginBottom: "30px",
            display: "block",
            margin: "auto"
          }}
        />
        <div className="mb-3">
          <label>Correo Electrónico</label>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del correo electrónico
            />
            <span className="input-group-text"><i className="bi bi-envelope"></i></span>
          </div>
        </div>
        <div className="mb-3">
          <label> Contraseña</label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              placeholder="contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
            />
            <span className="input-group-text"><i className="bi bi-lock"></i></span>
          </div>
        </div>
        <div className="mb-3" >
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recordarme
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button  style={{ width: "40%" }}  type="submit" className="btn btn-success">
            Iniciar
          </button>
        </div>
        <p className="forgot-password text-center">
          ¿Olvidaste la contraseña? <a href="#">Recuperar</a>
        </p>
      </form>
    </div>
  );
}
