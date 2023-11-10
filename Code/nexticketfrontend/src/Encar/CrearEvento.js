import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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
  
    return (
      <div>
        <Header />
        <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <form>
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
            {/* Agrega aquí el resto de tus campos de formulario */}
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
              marginRight: '10px', // Espacio entre botones
            }}
          >
            Crear Actividad
          </button>
          <div></div>
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
          <div></div>
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
          </form>
        </div>
      </div>
    );
  };
  
  export default CrearEvento;