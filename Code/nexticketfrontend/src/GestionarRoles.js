import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#383836' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '100px' }} />
        <h1 style={{ color: '#ffffff' }}>Gestionar Roles</h1>
      </div>
    );
  }
}

class GestionarRoles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correoElectronico: '',
      rol: 'Encargado',
    };
  }

  handleEmailChange = (event) => {
    this.setState({ correoElectronico: event.target.value });
  };

  handleRoleChange = (event) => {
    this.setState({ rol: event.target.value });
  };

  handleConfirmChanges = () => {
    const { correoElectronico, rol } = this.state;
    console.log('Correo Electronico:', correoElectronico);
    console.log('Rol:', rol);
  };

  render() {
    return (
      <div>
        <Header />
        <div style={{ backgroundColor: '#ffffff' }}>
          <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Correo Electrónico:
              <input type="text" name="email" value={this.state.correoElectronico} onChange={this.handleEmailChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
            </label>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Rol:
              <select value={this.state.rol} onChange={this.handleRoleChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }}>
                <option value="Encargado">Encargado</option>
                <option value="Administrador">Administrador</option>
                <option value="Usuario">Usuario</option>
              </select>
            </label>
            <div style={{ textAlign: 'center' }}>
              <button onClick={this.handleConfirmChanges} style={{ backgroundColor: '#575960', color: '#ffffff', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>
                Confirmar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GestionarRoles;
