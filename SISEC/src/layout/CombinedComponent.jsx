import React from 'react';
import './stylesdashboard.css';

function CombinedComponent() {
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
        </div>
    )
}

export default CombinedComponent;