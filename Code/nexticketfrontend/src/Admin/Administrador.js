import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchClick = () => {
    // Access the searchQuery from state
    const searchQuery = this.state.searchQuery;

    // Log the search query to the console
    console.log('Search Query:', searchQuery);
  };

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

    const searchBoxStyle = {
      width: '450px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '25px',
      backgroundColor: '#fff',
      padding: '5px',
      marginRight: '20px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
      border: 'none',
      outline: 'none',
      width: '100%',
      padding: '10px',
      borderRadius: '25px',
      fontSize: '14px', // Adjusted font size to match button
    };

    const labelStyle = {
      color: '#ffffff',
    };

    const buttonStyle = {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      marginLeft: '10px',
      fontSize: '14px',
      color: '#575960',
      fontWeight: 'bold',
    };

    return (
      <div style={headerStyle}>
        <img src="/logo.png" alt="Logo" style={logoStyle} />
        <div style={searchBoxStyle}>
          <input
            type="text"
            placeholder="Buscar evento..."
            style={inputStyle}
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
          <button
            onClick={this.handleSearchClick}
            style={buttonStyle}
          >
            Ir
          </button>
        </div>
        <h1 style={labelStyle}>Administrador</h1>
      </div>
    );
  }
}

const Administrador = () => {
  let { id } = useParams();
  console.log(id); // Esto imprimirá el id de la URL en la consola

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button style={{ backgroundColor: '#575960', color: '#ffffff', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
        <Link to="/gestiona_rol" style={{ color: '#FFF', textDecoration: 'none' }}>
          Gestionar Roles
        </Link>
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button style={{ backgroundColor: '#575960', color: '#ffffff', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
          <Link to="/eliminar_u" style={{ color: '#FFF', textDecoration: 'none' }}>
          Eliminar Usuario
        </Link>
        </button>
      </div>
      <br></br>
    </div>
  );
};

export default Administrador;
