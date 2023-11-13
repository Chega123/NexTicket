import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

class Header extends React.Component {
    render() {
      const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#383836',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '0 0 10px 10px',
      };
  
      const logoStyle = {
        height: '100px',
        marginRight: '10px',
      };
  
      const labelStyle = {
        color: '#ffffff',
      };
  
      return (
        <div style={headerStyle}>
          <img src="/logo.png" alt="Logo" style={logoStyle} />
          <h1 style={labelStyle}>Añadir Ubicación</h1>
        </div>
      );
    }
}

const AnadirUbicacion = () => {
  const [pais, setPais] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [aforo, setAforo] = useState('');
  const [tamano, setTamano] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      pais,
      departamento,
      direccion,
      aforo,
      tamano,
    };

    console.log(formData);
  };

  return (
    <div>
      <Header />
      <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              País:
              <select
                name="pais"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
                style={{
                  display: 'block',
                  margin: '10px 0',
                  padding: '10px',
                  borderRadius: '5px',
                  width: '300px',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                }}
              >
                <option value="">Selecciona una opción</option>
                {/* Aquí deberías agregar las opciones de los países */}
              </select>
            </label>
          </div>

          <div>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Departamento:
              <select
                name="departamento"
                value={departamento}
                onChange={(e) => setDepartamento(e.target.value)}
                style={{
                  display: 'block',
                  margin: '10px 0',
                  padding: '10px',
                  borderRadius: '5px',
                  width: '300px',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                }}
              >
                <option value="">Selecciona una opción</option>
                {/* Aquí deberías agregar las opciones de los departamentos */}
              </select>
            </label>
          </div>

          <div>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Dirección:
              <input
                type="text"
                name="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                style={{
                  display: 'block',
                  margin: '10px 0',
                  padding: '10px',
                  borderRadius: '5px',
                  width: '300px',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                }}
              />
            </label>
          </div>

          <div>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Aforo:
              <input
                type="number"
                name="aforo"
                value={aforo}
                onChange={(e) => setAforo(e.target.value)}
                style={{
                  display: 'block',
                  margin: '10px 0',
                  padding: '10px',
                  borderRadius: '5px',
                  width: '300px',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                }}
              />
            </label>
          </div>

          <div>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Tamaño:
              <select
                name="tamano"
                value={tamano}
                onChange={(e) => setTamano(e.target.value)}
                style={{
                  display: 'block',
                  margin: '10px 0',
                  padding: '10px',
                  borderRadius: '5px',
                  width: '300px',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                }}
              >
                <option value="">Selecciona una opción</option>
                <option value="pequeno">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
            </label>
          </div>

          <div>
            <button
              type="submit"
              style={{
                backgroundColor: '#575960',
                color: '#ffffff',
                padding: '10px 20px',
                fontSize: '18px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                marginTop: '20px',
              }}
            >
              Guardar Ubicación
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnadirUbicacion;
