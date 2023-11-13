//UI-03 Pagina de Inicio de Sesion
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#383836' }}>
      <img src="/logo.png" alt="Logo" style={{ height: '100px' }} />
      <h1 style={{ color: '#ffffff' }}>Iniciar sesión</h1>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const linkRef = React.createRef();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const datafin = { "Email": email, "Contrasena": password };
      const response = await fetch(`${process.env.REACT_APP_API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datafin),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const userType = data["Tipo_persona"];
        const userId = data["id_persona"]; // Aquí se obtiene el id_persona del objeto de respuesta
        console.log(data)
        if (userType === "administrador") {
          // Puedes pasar el id_persona a la URL si es necesario
          window.location.href = `/administrador?id=${userId}`;
        } else if (userType === "usuario") {
          window.location.href = `/usuario?id=${userId}`;
        } else if (userType === "encargado") {
          window.location.href = `/encargado?id=${userId}`;
        }
      } else {
        console.log('Error en la autenticación');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: '#ffffff' }}>
        <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <form onSubmit={handleLogin}>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Correo Electrónico:
              <input
                type="text"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }}
              />
            </label>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Contraseña:
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }}
              />
            </label>
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{ backgroundColor: '#575960', color: '#ffffff', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '20px' }}
              >
                Ingresar
              </button>
              <button type="button" style={{ marginLeft: '10px', backgroundColor: '#575960', color: '#ffffff', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                <Link to="/registro" style={{ color: '#FFF', textDecoration: 'none' }}>
                  Registrarse
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
