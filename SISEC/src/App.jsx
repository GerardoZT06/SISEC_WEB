// eslint-disable-next-line no-unused-vars
import React from 'react';
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
<<<<<<< HEAD


=======
>>>>>>> bfdcaf29898232cb4825453ec236186340650ce5
import CombinedComponent from './layout/CombinedComponent';



function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
<<<<<<< HEAD
              <Route path="/dashboard" element={<CombinedComponent/>} /> 
              <Route path="/login" element={<Login />} />
=======
              <Route path="/dashboard" element={<CombinedComponent />} /> {/* Aquí usamos CombinedComponent */}
              <Route path="/sign-up" element={<Login />} />
>>>>>>> bfdcaf29898232cb4825453ec236186340650ce5
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
