//UI-15 Interfaz Eliminar Usuarios
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#383836' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '100px' }} />
        <h1 style={{ color: '#ffffff' }}>Eliminar Usuarios</h1>
      </div>
    );
  }
}

class EliminarUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.DATA={"Personas":[]}
    this.DATA_general={"Personas":[]}
    this.state = {
      correoElectronico: '',
      rol: 'Encargado',
      usuariosRegistrados: [],
      usuariosAEliminar: [],

    };
    
  }
  async componentDidMount() {

    const rest=await fetch(process.env.REACT_APP_API+'/generar_personas',{
      method:'GET',
      headers:{'content-type':'application/json'},
      body:JSON.stringify()
      }
      )
    const data=await rest.json()
    this.DATA_general["Personas"]=data
    console.log(this.DATA_general)

  }


  handleEmailChange = (event) => {
    this.setState({ correoElectronico: event.target.value });
  };

  handleRoleChange = (event) => {
    this.setState({ rol: event.target.value });
  };

  handleAgregarAEliminacion = async() => {
    const dataa={"Email":this.state["correoElectronico"]}

    const rest=await fetch(process.env.REACT_APP_API+'/existencia',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(dataa)
      }
      )
      const data= await rest.json();
      console.log(data)
      if (data["validez"]=== "True") {
        this.DATA.Personas.push(data);
        console.log(this.DATA)
      }

  };

  handleConfirmEliminacion =  async() => {

    const rest=await fetch(process.env.REACT_APP_API+'/eliminar',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(this.DATA)
      })
    const data= await rest.json();
  };

  handleCancelarEliminacion = () => {
    // Implement logic to cancel user deletion
    // Reset 'usuariosAEliminar' and clear any other fields if needed
  };

  render() {
    const { correoElectronico, rol, usuariosRegistrados, usuariosAEliminar } = this.state;

    return (
      <div>
        <Header />
        <div style={{ backgroundColor: '#ffffff' }}>
          <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ fontSize: '18px', color: '#000000', fontWeight: 'bold' }}>USUARIOS REGISTRADOS</label>
            <table style={{ borderCollapse: 'collapse', width: '80%', margin: '10px auto' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #000', padding: '8px' }}>Nombre</th>
                  <th style={{ border: '1px solid #000', padding: '8px' }}>Correo Electrónico</th>
                  <th style={{ border: '1px solid #000', padding: '8px' }}>Rol</th>
                </tr>
              </thead>
              <tbody>
              {this.DATA_general["Personas"].map((usuario, index) => (
                  <tr key={index}>
                    <td>{usuario.Nombre}</td>
                    <td>{usuario.Email}</td>
                    <td>{usuario.Rol}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <label style={{ fontSize: '18px', color: '#000000' }}>Correo Electrónico del Usuario a Eliminar</label>

            <input
              type="text"
              value={correoElectronico}
              onChange={this.handleEmailChange}
              placeholder="Correo Electrónico"
              style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }}
            />

            <button onClick={this.handleAgregarAEliminacion} style={{ backgroundColor: '#575960', color: '#ffffff', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '10px' }}>
              Agregar a lista de eliminación
            </button><br></br>

            <label style={{ fontSize: '18px', color: '#000000', fontWeight: 'bold' }}>USUARIOS SELECCIONADOS - LISTA DE ELIMINACIÓN</label>

            <table style={{ borderCollapse: 'collapse', width: '80%', margin: '10px auto' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #000', padding: '8px' }}>Nombre</th>
                  <th style={{ border: '1px solid #000', padding: '8px' }}>Correo Electrónico</th>
                  <th style={{ border: '1px solid #000', padding: '8px' }}>Rol</th>
                </tr>
              </thead>
              <tbody>
              {this.DATA["Personas"].map((usuario, index) => (
                  <tr key={index}>
                    <td>{usuario.Nombre}</td>
                    <td>{usuario.Email}</td>
                    <td>{usuario.Rol}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button onClick={this.handleConfirmEliminacion} style={{ backgroundColor: '#575960', color: '#ffffff', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '10px' }}>
              Confirmar Eliminación
            </button>

            <button onClick={this.handleCancelarEliminacion} style={{ backgroundColor: '#575960', color: '#ffffff', padding: '10px 20px', fontSize: '18px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '10px' }}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EliminarUsuario;
