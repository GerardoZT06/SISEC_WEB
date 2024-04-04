// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
  return (
    <header className="bg-light py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="m-0">Dashboard</h1>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-primary">Nuevo</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="bg-light p-3" style={{ height: '10vh', minWidth: '200px' }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i className="bi bi-speedometer2"></i> Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-table"></i> Productos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-currency-dollar"></i> Ventas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-truck"></i> Entregas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="bi bi-people"></i> Clientes
          </a>
        </li>
      </ul>
    </aside>
  );
}

function Dashboard() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto p-3">
          <h1>Bienvenido al dashboard</h1>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;