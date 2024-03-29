// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Swal from 'sweetalert2';

export default class Login extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        //  agregar la lógica de validación del formulario
        // Si la validación falla, muestra una alerta de SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡Algo salió mal!', // Texto de la alertaMEQUEDE AQUI
          
        });
      }
  render() {
    return (
       
        <form style={{ width: "90%", margin: "auto", alignItems: "center" }}>
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
        <div className="d-grid" style={{ width: "40%", margin: "auto" }}>
          <button type="submit" className="btn btn-success">
            Iniciar
          </button>
        </div>
        <p className="forgot-password text-center">
          ¿Olvidaste la contraseña? <a href="#">Recuperar</a>
        </p>
      </form>
    
    );
  }
}
