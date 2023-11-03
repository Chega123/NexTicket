import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  const [formState, setFormState] = useState({
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
  });

  const handleDocumentTypeChange = (event) => {
    setFormState(prevState => ({ ...prevState, documentType: event.target.value }));
  }

  const handleSexoChange = (event) => {
    setFormState(prevState => ({ ...prevState, sexo: event.target.value }));
  }

  const handleAceptoTerminosChange = (event) => {
    setFormState(prevState => ({ ...prevState, aceptoTerminos: event.target.checked }));
  }

  const handleAceptoPromocionesChange = (event) => {
    setFormState(prevState => ({ ...prevState, aceptoPromociones: event.target.checked }));
  }

  const handleInputChange = (event) => {
    setFormState(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  }

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#383836' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '100px' }} />
        <h1 style={{ color: '#ffffff' }}>Registro</h1>
      </div>
      <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={(event) => event.preventDefault()}>
          <label style={{ fontSize: '18px', color: '#000000' }}>
            Nombres:
            <input type="text" name="nombres" value={formState.nombres} onChange={handleInputChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
          </label>
          <label style={{ fontSize: '18px', color: '#000000' }}>
            Apellidos:
            <input type="text" name="apellidos" value={formState.apellidos} onChange={handleInputChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
          </label>
           <label style={{ fontSize: '18px', color: '#000000' }}>
            Correo Electrónico:
            <input type="email" name="email" value={formState.email} onChange={handleInputChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
          </label>
          <label style={{ fontSize: '18px', color: '#000000' }}>
            Confirmar Correo Electrónico:
            <input type="email" name="confirmEmail" value={formState.confirmEmail} onChange={handleInputChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
          </label>
          <label style={{ fontSize: '18px', color: '#000000' }}>
            Teléfono:
            <input type="tel" name="telefono" value={formState.telefono} onChange={handleInputChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
          </label>
          <label style={{ fontSize: '18px', color: '#000000' }}>
            Contraseña:
            <input type="password" name="password" value={formState.password} onChange={handleInputChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
          </label>
          <label style={{ fontSize: '18px', color: '#000000' }}>
            Confirmar Contraseña:
            <input type="password" name="confirmPassword" value={formState.confirmPassword} onChange={handleInputChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
          </label>
          <label style={{ fontSize: '18px', color: '#000000' }}>
            Tipo de Documento de Identidad:
            <select name="documentType" value={formState.documentType} onChange={handleDocumentTypeChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }}>
              <option value="">--Seleccione una opción--</option>
              <option value="DNI">Documento Nacional de Identidad (DNI)</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="Carnet">Carnet de extranjería</option>
            </select>
          </label>

          {formState.documentType && (
            <label style={{ fontSize: '18px', color: '#000000' }}>
              Número de {formState.documentType}:
              <input type="text" name="documentNumber" value={formState.documentNumber} onChange={handleInputChange} style={{ display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width: '300px', backgroundColor: '#ffffff', color: '#000000' }} />
            </label>
          )}
          <label style={{ fontSize: '18px', color: '#000000' }}>
            Sexo:
            <select
              name="sexo"
              value={formState.sexo}
              onChange={handleSexoChange}
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
              value={formState.fechaNacimiento}
              onChange={handleInputChange}
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
                checked={formState.aceptoTerminos}
                onChange={handleAceptoTerminosChange}
                style={{ margin: '10px 0', backgroundColor: '#ffffff', color: '#000000' }}
            />
            Declaro que he leído y acepto los Términos y Condiciones,  y la Política de Privacidad <br></br> de Nex Ticket (<Link to ="/terminos">Ver Términos y Condiciones).</Link><br></br>
          </label>

          <label style={{ fontSize: '18px', color: '#000000' }}>
            <input
              type="checkbox"
              name="aceptoPromociones"
              checked={formState.aceptoPromociones}
              onChange={handleAceptoPromocionesChange}
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
        </form>
      </div>
    </div>
  );
}

export default Registro;