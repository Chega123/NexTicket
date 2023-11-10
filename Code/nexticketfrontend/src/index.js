import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Registro from './Reg/Registro';
import Terminos from './Reg/Terminos';
import Login from './Account/Login';
import Administrador from './Admin/Administrador';
import GestionarRoles from './Admin/GestionarRoles';
import EliminarUsuarios from "./Admin/EliminarUsuarios";

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