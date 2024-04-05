/* eslint-disable no-undef */
import React from 'react';
import './stylesdashboard.css';
import './Combined.css';
import Swal from 'sweetalert2';

function CombinedComponent() {
  const [jobs, setJobs] = React.useState([
    { id: 1, instructor: 'Rogelio Perez García', Correo: 'Rogelio@utez.edu.mx', estado: 'Junior Post' },
    { id: 2, instructor: 'Abner Sanchez Hernandez', Correo: 'Abner@utez.edu.mx', estado: 'Senior Post' },
    { id: 3, instructor: 'Jose Luis Luna Lopez', Correo: 'luna@utez.edu.mx', estado: 'Master' },
    { id: 4, instructor: 'Juan Carlos Ramírez', Correo: 'juan@utez.edu.mx', estado: 'Junior Post' },
    { id: 5, instructor: 'María Fernanda Gómez', Correo: 'maria@utez.edu.mx', estado: 'Senior Post' },
    { id: 6, instructor: 'Pedro Martínez', Correo: 'pedro@utez.edu.mx', estado: 'Master' }
  ]);

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, no podrás recuperar este instructor.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setJobs(jobs.filter((job) => job.id !== id));
        Swal.fire(
          '¡Eliminado!',
          'El instructor ha sido eliminado correctamente.',
          'success'
        );
      }
    });
  };

  const getStatusText = (estado) => {
    if (estado === 'Junior Post' || estado === 'Senior Post' || estado === 'Master') {
      return 'Activo';
    } else {
      return 'Inactivo';
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Quieres cerrar sesión?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, redirige al inicio de sesión
        window.location.href = "/login";
      }
    });
  };

  return (
    <div className="container">
      <nav>
        <div className="navbar">
          <div className="logo">
            <img src="/src/assets/img/WPIPE.jpg" alt="image" className="logo-image" />
            <p className="administrador-text">Administrador</p>
          </div>
          <ul>
            <li><a href="#"><span className="nav-item">Perfil</span></a></li>
            <li><a href="#"><span className="nav-item">Instructores</span></a></li>
            <li><a href="#"><span className="nav-item">Participantes</span></a></li>
            <li><a href="#"><span className="nav-item">Eventos</span></a></li>
            <li><a href="#"><span className="nav-item">Principal</span></a></li>
            <li><a href="#"><span className="nav-item">Tipo-Area</span></a></li>
            <li><a href="#"><span className="nav-item">Categorías</span></a></li>
            <li><a href="#"><span className="nav-item">Reportes</span></a></li>
            <button className="btn btn-light logout-button" onClick={handleLogout}>Cerrar Sesión</button>
          </ul>
        </div>
      </nav>
      <section className="main">
        <div className="main-top">
          <p>SISEC</p>
        </div>
        <div className="main-body">
          <h1>Lista de Instructores</h1>
          <div className="search_bar">
            <input type="search" placeholder="Buscar Instructor..." />
            <select name="" id="">
              <option>Category</option>
              <option>Web Design</option>
              <option>App Design</option>
              <option>App Development</option>
            </select>
            <select className="filter">
              <option>Filter</option>
            </select>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Instructor</th>
                <th>Correo Electrónico</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.instructor}</td>
                  <td>{job.Correo}</td>
                  <td>{getStatusText(job.estado)}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(job.id)}>Eliminar</button>
                    <button className="btn btn-primary edit-button" onClick={() => handleEdit(job.id)}>Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default CombinedComponent;

