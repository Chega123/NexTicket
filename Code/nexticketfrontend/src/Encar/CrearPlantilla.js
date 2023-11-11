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
          <h1 style={labelStyle}>Crear Evento</h1>
        </div>
      );
    }
  }


const CrearPlantilla = () => {
  const [nombre, setnombre] = useState('');
  const [ingreso_libre, setingreso_libre] = useState(false);
  const [permitir_invitaciones, setpermitir_invitaciones] = useState(false);
  const [edad, setEdad] = useState('');
  const [turno, setTurno] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí es donde enviarías los datos del formulario al backend
    const formData = {
      nombre,
      ingreso_libre,
      permitir_invitaciones,
      edad,
      turno,
    };

    console.log(formData);

    // Aquí es donde harías la llamada al backend...
  };

  return (
    <div>
      <Header />
      <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Nombre de la Plantilla:
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => setnombre(e.target.value)}
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
              Ingreso libre:
              <input
                type="checkbox"
                checked={ingreso_libre}
                onChange={() => setingreso_libre(!ingreso_libre)}
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>

          <div>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Permitir que los invitados inviten a más personas:
              <input
                type="checkbox"
                checked={permitir_invitaciones}
                onChange={() => setpermitir_invitaciones(!permitir_invitaciones)}
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>

          <div>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Edad:
              <select
                name="edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
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
                <option value="mayoresDe18">Mayores de 18</option>
                <option value="todasLasEdades">Todas las edades</option>
              </select>
            </label>
          </div>

          <div>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Turno:
              <select
                name="turno"
                value={turno}
                onChange={(e) => setTurno(e.target.value)}
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
                <option value="diurno">Diurno</option>
                <option value="nocturno">Nocturno</option>
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
              Guardar Plantilla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearPlantilla;
