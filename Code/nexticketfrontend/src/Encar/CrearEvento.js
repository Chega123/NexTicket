//UI-16 Interfaz crear evento
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

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
  
  const CrearEvento = () => {
    let { id } = useParams();
    console.log(id);
  
    const [nombreEvento, setNombreEvento] = useState('');
    const [descripcion, setDescripcion] = useState('');
  
    const navigate = useNavigate();

    const [plantillas, setPlantillas] = useState([]);


    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Aquí es donde enviarías los datos del formulario al backend
      // Incluye el `id` junto con los otros datos del formulario
      const formData = {
        id,
        nombreEvento,
        descripcion,
      };
  
      console.log(formData);
  
      // Aquí es donde harías la llamada al backend...


    };

    useEffect(() => {
      // Aquí harías la llamada al backend para obtener las plantillas basadas en el ID del usuario
      const obtenerPlantillas = async () => {
        try {
          // Reemplaza la URL con la ruta de tu endpoint para obtener las plantillas
          const response = await fetch(`/api/obtener-plantillas?id=${id}`);
          const data = await response.json();
    
          // Actualiza el estado de las plantillas con los datos recibidos del backend
          setPlantillas(data.plantillas);
        } catch (error) {
          console.error('Error al obtener plantillas:', error);
        }
      };
    
      obtenerPlantillas();
    }, [id]);
    
    return (
      <div>
        <Header />
        <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <form onSubmit={handleSubmit}>
            <div>
              <label style={{ fontSize: '18px', color: '#000000' }}>
                Nombre del Evento:
                <input
                  type="text"
                  name="nombreEvento"
                  value={nombreEvento}
                  onChange={(e) => setNombreEvento(e.target.value)}
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
              <label style={{ fontSize: '18px', color: '#000000' }}>
                Descripción:
                <textarea
                  name="descripcion"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  style={{
                    display: 'block',
                    margin: '10px 0',
                    padding: '10px',
                    borderRadius: '5px',
                    width: '300px',
                    height: '100px',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                  }}
                />
              </label>
            </div>
            <div>
  <label style={{ fontSize: '18px', color: '#000000' }}>
    Plantillas:
    <div
      style={{
        border: '1px solid black',
        borderRadius: '5px',
        width: '300px',
        height: '100px',
        padding: '10px',
        backgroundColor: '#ffffff',
        color: '#000000',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Aquí mostrarás las plantillas */}
      {plantillas.map((plantilla, index) => (
        <div key={index}>{plantilla}</div>
      ))}
    </div>
  </label>
</div>

            <div>
                    <table style={{ marginTop: '20px', border: '1px solid black' }}>
            <thead>
              <tr>
                <th>Actividades</th>
              </tr>
            </thead>
            <tbody>
              {/* Aquí es donde irían las filas de la tabla con las actividades */}
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            onClick={() => navigate(`/crear_act?id=${id}`)}
            style={{
              backgroundColor: '#575960',
              color: '#ffffff',
              padding: '10px 20px',
              fontSize: '18px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '20px',
              marginRight: '10px', // Espacio entre botones
            }}
          >
            Crear Actividad
          </button>

                <table style={{ marginTop: '20px', border: '1px solid black' }}>
          <thead>
            <tr>
              <th>Materiales</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí es donde irían las filas de la tabla con los materiales */}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
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
          Materiales
        </button>
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
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default CrearEvento;
  