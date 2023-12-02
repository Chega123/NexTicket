//UI-06 Vista Principal - Encargado
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  

  
 const Encargado = () => {
  let query = new URLSearchParams(useLocation().search);
  let id = query.get("id");
  console.log(id);

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch('URL_DEL_BACKEND', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => setEventos(data.eventos))
      .catch((error) => console.error('Error:', error));
  }, [id]);

  return (
    <div>
      <Header />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button 
          onClick={() => window.location.href = `/crear_e?id=${id}`}
          style={{ backgroundColor: '#575960', color: '#ffffff', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
        >
          Crear Evento
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button 
          onClick={() => window.location.href = `/login?id=${id}`}
          style={{ backgroundColor: '#575960', color: '#ffffff', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
        >
          Gestionar Eventos
        </button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '20px' }}>
        {eventos.map((evento) => (
          <div key={evento.id_evento} style={{ width: '200px', height: '300px', border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h3>{evento.nombre}</h3>
            <p>{evento.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Encargado;
