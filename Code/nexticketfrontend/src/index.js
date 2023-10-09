import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Registro from './Registro';
import Terminos from './Terminos';
import Login from './Login';
import Administrador from './Administrador';
import GestionarRoles from './GestionarRoles';
import EliminarUsuarios from "./EliminarUsuarios";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <EliminarUsuarios/>
    </div>
  </React.StrictMode>,
);
