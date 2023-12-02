//UI-01 Pagina de Registro
import React, { } from 'react';
import { Link } from 'react-router-dom';

class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.linkRef = React.createRef();
    this.state = {
      documentType: '',
      sexo: '',
      fechaNacimiento: null,
      aceptoTerminos: false,
      aceptoPromociones: false,
      nombres: '',
      apellidos: '',
      email: '',
      confirmEmail: '',
      telefono: '',
      password: '',
      confirmPassword: '',
      documentNumber: '',
    };
  }

  handleDocumentTypeChange = (event) => {
    this.setState({ documentType: event.target.value });
  }

  handleSexoChange = (event) => {
    this.setState({ sexo: event.target.value });
  }

  handleAceptoTerminosChange = (event) => {
    this.setState({ aceptoTerminos: event.target.checked });
  }

  handleAceptoPromocionesChange = (event) => {
    this.setState({ aceptoPromociones: event.target.checked });
  }

  handleSubmit = async(event) => {
    
    event.preventDefault();
    
    const ConfirmEmai= this.state.confirmEmail
    const ConfirmPassword= this.state.confirmPassword
    const AceptoTerminos= this.state.aceptoTerminos
    const AceptoTerminoseptoPromociones= this.state.aceptoPromociones

    const formData = {
      Nombres: this.state.nombres,
      Apellidos: this.state.apellidos,
      Email: this.state.email,
      Telefono: this.state.telefono,
      Contraseña: this.state.password,
      Tipo: this.state.documentType,
      Numero: this.state.documentNumber,
      Sexo: this.state.sexo,
      Fecha_Nacimiento: this.state.fechaNacimiento,
      Rol:'usuario'

    };
    const rest=await fetch(process.env.REACT_APP_API+'/registro',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(formData)
    }
    )
    const data= await rest.json();
    console.log(data)
    this.linkRef.current.click();
  }

  render() {
    return (
      <div style={{ backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#383836' }}>
          <img src="/logo.png" alt="Logo" style={{ height: '100px' }} />
          <h1 style={{ color: '#ffffff' }}>Registro</h1>
        </div>
        <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <form onSubmit={this.handleSubmit}>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Nombres:
              <input type="text" name="nombres" value={this.state.nombres} onChange={(e) => this.setState({ nombres: e.target.value })} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
            </label>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Apellidos:
              <input type="text" name="apellidos" value={this.state.apellidos} onChange={(e) => this.setState({ apellidos: e.target.value })} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
            </label>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Correo Electrónico:
              <input type="email" name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
            </label>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Confirmar Correo Electrónico:
              <input type="email" name="confirmEmail" value={this.state.confirmEmail} onChange={(e) => this.setState({ confirmEmail: e.target.value })} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
            </label>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Teléfono:
              <input type="tel" name="telefono" value={this.state.telefono} onChange={(e) => this.setState({ telefono: e.target.value })} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
            </label>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Contraseña:
              <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
            </label>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Confirmar Contraseña:
              <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
            </label>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Tipo de Documento de Identidad:
              <select name="documentType" onChange={this.handleDocumentTypeChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }}>
                <option value="">--Seleccione una opción--</option>
                <option value="DNI">Documento Nacional de Identidad (DNI)</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="carnet">Carnet de extranjería</option>
              </select>
            </label>

            {this.state.documentType && (
              <label style={{ fontSize: '18px', color: '#000000' }}>
                Número de {this.state.documentType}:
                <input type="text" name="documentNumber" value={this.state.documentNumber} onChange={(e) => this.setState({ documentNumber: e.target.value })} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
              </label>
            )}
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Sexo:
              <select
                name="sexo"
                value={this.state.sexo}
                onChange={this.handleSexoChange}
                style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }}
              >
                <option value="">--Seleccione una opción--</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </label>
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Fecha de Nacimiento:
              <input
                type="date"
                name="fechaNacimiento"
                value={this.state.fechaNacimiento}
                onChange={(e) => this.setState({ fechaNacimiento: e.target.value })}
                style={{
                  display: 'block',
                  margin: '10px 0',
                  padding: '10px',
                  borderRadius: '5px',
                  width: '300px',
                  backgroundColor: '#ffffff',
                  color: '#000000'
                }}
              />
            </label>

            <label style={{ fontSize: '18px', color: '#000000' }}>
              <input
                  type="checkbox"
                  name="aceptoTerminos"
                  checked={this.state.aceptoTerminos}
                  onChange={this.handleAceptoTerminosChange}
                  style={{ margin: '10px 0', backgroundColor: '#ffffff', color: '#000000' }}
              />
              Declaro que he leído y acepto los Términos y Condiciones,  y la Política de Privacidad <br></br> de Nex Ticket (<Link to ="/terminos">Ver Términos y Condiciones).</Link><br></br>
            </label>

            <label style={{ fontSize: '18px', color: '#000000' }}>
              <input
                type="checkbox"
                name="aceptoPromociones"
                checked={this.state.aceptoPromociones}
                onChange={this.handleAceptoPromocionesChange}
                style={{ margin: '10px 0', backgroundColor: '#ffffff', color: '#000000' }}
              />
              Autorizo que Nex Ticket pueda enviarme información sobre eventos y promociones.
            </label>
            <br></br>
            
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
              Registrarse
            </button>
              
            <Link to="/" ref={this.linkRef} style={{ display: 'none' }} />
          </form>
        </div>
      </div>
    );
  }
}
export default Registro;
