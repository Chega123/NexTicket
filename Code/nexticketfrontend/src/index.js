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

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/gestiona_rol" element={<GestionarRoles />} />
        <Route path="/eliminar_u" element={<EliminarUsuarios />} />
        
        {/* Agrega aquí las rutas para los demás componentes */}
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);