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
    return (
      <div>
        <Header />
      </div>
    );
  };
  
  export default CrearEvento;