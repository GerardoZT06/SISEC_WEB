// App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Registro from './components/Registro';


function App() {
  return (
    <Router>
    <div className="App">
     
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Registro />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}
export default App;