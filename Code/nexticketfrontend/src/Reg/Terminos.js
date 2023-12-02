//UI-02 Terminos y condiciones
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#383836' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '100px' }} />
        <h1 style={{ color: '#ffffff' }}>Términos y condiciones</h1>
      </div>
    );
  }
}

class TermsAndConditions extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Términos y Condiciones</h2>
        <p>Al utilizar NexTicket, usted acepta estos términos y condiciones. NexTicket se reserva el derecho de cambiar estos términos en cualquier momento, por lo que le recomendamos que los revise regularmente.</p>
        <p>NexTicket proporciona una plataforma para la compra de entradas para diversos eventos. No somos responsables de la organización de los eventos ni de las acciones de los organizadores del evento.</p>
        <p>Al comprar una entrada a través de NexTicket, usted acepta cumplir con todas las reglas y regulaciones del evento y del lugar del evento.</p>
      </div>
    );
  }
}

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Política de Privacidad</h2>
        <p>NexTicket respeta su privacidad y se compromete a protegerla. Esta política de privacidad explica cómo recopilamos y utilizamos su información personal.</p>
        <p>Recopilamos información personal cuando compra entradas a través de NexTicket. Esta información incluye su nombre, dirección de correo electrónico y detalles de pago.</p>
        <p>Utilizamos esta información para procesar su compra, proporcionar asistencia al cliente y enviarle actualizaciones sobre su compra. No compartimos su información personal con terceros sin su consentimiento.</p>
      </div>
    );
  }
}

class Terminos extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TermsAndConditions />
        <PrivacyPolicy />
          <div style={{ textAlign: 'center' }}>
              <button style={{
                  backgroundColor: '#575960',
                  color: '#ffffff',
                  padding: '10px 20px',
                  fontSize: '18px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '20px',
                  marginRight: '10px',
              }}>
                  <Link to="/registro" style={{ color: '#ffffff', textDecoration: 'none' }}>Volver a Registro</Link>
              </button>
          </div>
          <br></br>
      </div>
    );
  }
}


export default Terminos;
