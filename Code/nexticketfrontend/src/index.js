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
import Encargado from "./Encar/Encargado";
import CrearEvento from "./Encar/CrearEvento";
import CrearActividad from "./Encar/CrearActividad";
import CrearPlantilla from "./Encar/CrearPlantilla";
import AnadirUbicacion from "./Encar/AnadirUbicacion";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/gestiona_rol" element={<GestionarRoles />} />
        <Route path="/eliminar_u" element={<EliminarUsuarios />} />
        <Route path="/encargado" element={<Encargado />} />
        <Route path="/crear_e" element={<CrearEvento />} />
        <Route path="/crear_act" element={<CrearActividad />} />
        <Route path="/crear_plant" element={<CrearPlantilla />} />
        <Route path="/anadir_ubic" element={<AnadirUbicacion />} />
        {/* Agrega aquí las rutas para los demás componentes */}
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);