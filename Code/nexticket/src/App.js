import React from 'react';

class SignUp extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: '#ffffff'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#383836'}}>
          <img src="/logo.png" alt="Logo" style={{height: '100px'}}/>
          <h1 style={{color: '#ffffff'}}>Registro</h1>
        </div>
        <div style={{margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <form>
            <label style={{fontSize: '18px', color: '#000000'}}>
              Nombres:
              <input type="text" name="nombres" style={{display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width:'300px', backgroundColor: '#ffffff', color:'#000000'}}/>
            </label>
            <label style={{fontSize: '18px', color: '#000000'}}>
              Apellidos:
              <input type="text" name="apellidos" style={{display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width:'300px', backgroundColor: '#ffffff', color:'#000000'}}/>
            </label>
            <label style={{fontSize: '18px', color: '#000000'}}>
              Email:
              <input type="email" name="email" style={{display: 'block', margin: '10px 0', padding: '10px', borderRadius: '5px', width:'300px', backgroundColor:'#ffffff' ,color:'#000000'}}/>
            </label>
            <label style={{fontSize:'18px' ,color:'#000000'}}>
              Confirmar Email:
              <input type="email" name="confirmEmail" style={{display:'block' ,margin:'10px 0' ,padding:'10px' ,borderRadius:'5px' ,width:'300px' ,backgroundColor:'#ffffff' ,color:'#000000'}}/>
            </label>
            <label style={{fontSize:'18px' ,color:'#000000'}}>
              Telefono:
              <input type="tel" name="telefono" style={{display:'block' ,margin:'10px 0' ,padding:'10px' ,borderRadius:'5px' ,width:'300px' ,backgroundColor:'#ffffff' ,color:'#000000'}}/>
            </label>
            <label style={{fontSize:'18px' ,color:'#000000'}}>
              Contraseña:
              <input type="password" name="password" style={{display:'block' ,margin:'10px 0' ,padding:'10px' ,borderRadius:'5px' ,width:'300px' ,backgroundColor:'#ffffff' ,color:'#000000'}}/>
            </label>
            <label style={{fontSize:'18px' ,color:'#000000'}}>
              Confirmar Contraseña:
              <input type="password" name="confirmPassword" style={{display:'block' ,margin:'10px 0' ,padding:'10px' ,borderRadius:'5px' ,width:'300px' ,backgroundColor:'#ffffff' ,color:'#000000'}}/>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
