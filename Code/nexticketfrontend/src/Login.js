import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#383836' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '100px' }} />
        <h1 style={{ color: '#ffffff' }}>Iniciar sesión</h1>
      </div>
    );
  }
}

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleLogin = (event) => {
    event.preventDefault();
    console.log('Correo Electrónico:', this.state.email);
    console.log('Contraseña:', this.state.password);
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{ backgroundColor: '#ffffff' }}>
          <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <form onSubmit={this.handleLogin}>
              <label style={{ fontSize: '18px', color: '#000000' }}>
                Correo Electronico:
                <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
              </label>
              <label style={{ fontSize: '18px', color: '#000000' }}>
                Contraseña:
                <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
              </label>
              <div style={{ textAlign: 'center' }}>
                <button type="submit" style={{ backgroundColor: '#575960', color: '#ffffff', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
