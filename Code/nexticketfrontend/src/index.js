import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Registro from './Registro';
import Terminos from './Terminos';
import Login from './Login';
import Administrador from './Administrador';
import GestionarRoles from './GestionarRoles';
import EliminarUsuarios from "./EliminarUsuarios";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/terminos" element={<Terminos />} />
          {/* Agrega aquí las rutas para los demás componentes */}
      </Routes>
    </Router>
  </React.StrictMode>,
);
