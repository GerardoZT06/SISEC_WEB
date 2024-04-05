<<<<<<< HEAD
/* eslint-disable no-undef */
=======
>>>>>>> bfdcaf29898232cb4825453ec236186340650ce5
import React from 'react';
import './stylesdashboard.css';
import './Combined.css';
import Swal from 'sweetalert2';

function CombinedComponent() {
<<<<<<< HEAD
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
=======
    return (
        <div className="container">
            <nav>
                <div className="navbar">
                <div className="logo">
    <img src="https://pbs.twimg.com/media/EjCoRXNVoAEjKE-.jpg" alt="" />
    <div class="text-container">
        <h6>Esmeralda Avilés Hernández</h6>
        <h6> <strong>  Administrador </strong>  </h6>
    </div>
</div>
<ul>
    <li><a href="#">
        <img src="https://cdn-icons-png.flaticon.com/128/8819/8819172.png" alt="" className="white-icon" style={{ width: '60px', height: '60px' }} />
        <span className="nav-item">Perfil</span>
    </a></li>
    <li><a href="#">
        <img src="https://cdn-icons-png.flaticon.com/128/8819/8819172.png" alt="" className="white-icon" style={{ width: '60px', height: '60px' }} />
        <span className="nav-item">Instructores</span>
    </a></li>
    <li><a href="#">
        <img src="https://cdn-icons-png.flaticon.com/128/8819/8819172.png" alt="" className="white-icon" style={{ width: '60px', height: '60px' }} />
        <span className="nav-item">Participantes</span>
    </a></li>
    <li><a href="#">
        <img src="https://cdn-icons-png.flaticon.com/128/8819/8819172.png" alt="" className="white-icon" style={{ width: '60px', height: '60px' }} />
        <span className="nav-item">Eventos</span>
    </a></li>
    <li><a href="#">
        <img src="https://cdn-icons-png.flaticon.com/128/8819/8819172.png" alt="" className="white-icon" style={{ width: '60px', height: '60px' }} />
        <span className="nav-item">Principal</span>
    </a></li>
    <li><a href="#">
        <img src="https://cdn-icons-png.flaticon.com/128/8819/8819172.png" alt="" className="white-icon" style={{ width: '60px', height: '60px' }} />
        <span className="nav-item">Tipo-Area</span>
    </a></li>
    <li><a href="#">
        <img src="https://cdn-icons-png.flaticon.com/128/8819/8819172.png" alt="" className="white-icon" style={{ width: '60px', height: '60px' }} />
        <span className="nav-item">Categorias</span>
    </a></li>
    <li><a href="#" className="logout">
        <img src="https://cdn-icons-png.flaticon.com/128/8819/8819172.png" alt="" className="white-icon" style={{ width: '60px', height: '60px' }} />
        <span className="nav-item">Reportes</span>
    </a></li>
</ul>

                </div>
            </nav>
            <section className="main">
            <div className="main-top full-width">
    <a href="#">
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png" alt=" s" className="logo-img" style={{ width: '100px' }} />
   
   
 
    </a>
 </div>
                <div className="main-body">
                    <div className="card">
                        <h1 className="card-title">Listado de Categorías</h1>
                    </div>
                    <div className="search_bar">
                        <input type="search" placeholder="Buscar Categorias" />
                        <select name="" id="">
                            <option>Estado</option>
                            <option>Web Design</option>
                            <option>App Design</option>
                            <option>App Development</option>
                        </select>
                         
                    </div>
                    <div className="tags_bar">
                        <div className="tag">
                            <i className="fas fa-code"></i>
                            <span>Registrar Categoria</span>
                        </div>
                        
                    </div>
                    <div className="row">
    <p><strong>Nombre de la Categoria</strong></p>
     
</div>
                    <div className="job_card">
                        <div className="job_details">
                            <div className="img">
                             </div>
                            <div className="text">
                                <h5>Desarrollo de Software y Programación</h5>
                             </div>
                        </div>
                        <div className="job_salary">
                            <h4>$6.7 - $12.5k /yr</h4>
                            <span>1 days ago</span>
                        </div>
                    </div>

                    <div className="job_card">
                        <div className="job_details">
                            <div className="img">
                             </div>
                            <div className="text">
                                <h5>Negocios y Emprendimiento</h5>
                             </div>
                        </div>
                        <div className="job_salary">
                            <h4>$8.7 - $13.2k /yr</h4>
                            <span>2 days ago</span>
                        </div>
                    </div>
                    <div className="job_card">
                        <div className="job_details">
                            <div className="img">
                             </div>
                            <div className="text">
                                <h5>Product Developer</h5>
                             </div>
                        </div>
                        <div className="job_salary">
                            <h4>$11 - $18.5k /yr</h4>
                            <span>2 days ago</span>
                        </div>
                    </div>
                    <div className="job_card">
                        <div className="job_details">
                            <div className="img">
                             </div>
                            <div className="text">
                                <h5>Programmer</h5>
                             </div>
                        </div>
                        <div className="job_salary">
                            <h4>$6 - $11.5k /yr</h4>
                            <span>3 days ago</span>
                        </div>
                    </div>
                    <div className="job_card">
                        <div className="job_details">
                            <div className="img">
                             </div>
                            <div className="text">
                                <h5>React.js Expert</h5>
                             </div>
                        </div>
                        <div className="job_salary">
                            <h4>$12.5 - $25.5k /yr</h4>
                            <span>4 days ago</span>
                        </div>
                    </div>
                </div>
            </section>
>>>>>>> bfdcaf29898232cb4825453ec236186340650ce5
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

<<<<<<< HEAD
export default CombinedComponent;

=======
export default CombinedComponent;
>>>>>>> bfdcaf29898232cb4825453ec236186340650ce5
