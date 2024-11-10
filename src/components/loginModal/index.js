import React, { useState } from 'react';
import './loginModal.css';

const AuthFormModal = ({ onLogin }) => {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegisterClick = () => {
    setIsActive(true);
    setEmail('');
    setPassword('');
  };

  const handleLoginClick = () => {
    setIsActive(false);
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    const endpoint = isActive 
      ? 'https://web-production-10154.up.railway.app/auth/register'
      : 'https://web-production-10154.up.railway.app/auth/login';
      
    const bodyData = isActive 
      ? { nombre: name, email, contraseña: password }
      : { email, contraseña: password };
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
      
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Error en la autenticación');
      } else {
        localStorage.setItem('token_user', data.token);
        localStorage.setItem('rol', data.rol);

        if (isActive) {
          setSuccessMessage('Registro exitoso. ¡Bienvenido!');
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        } else {
          onLogin();
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={`container123 ${isActive ? 'active123' : ''}`} id="container123">
      <div className={`form-container123 ${isActive ? 'sign-up123' : 'sign-in123'}`}>
        <form onSubmit={handleSubmit}>
          <h1>{isActive ? 'Crear Cuenta' : 'Iniciar Sesión'}</h1>
          <span>o usa tu email para {isActive ? 'registrarte' : 'iniciar sesión'}</span>
          
          {isActive && (
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="botones123" type="submit">
            {isActive ? 'Regístrate' : 'Iniciar Sesión'}
          </button>
          
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          
          {!isActive && (
            <button className="botones123" onClick={handleRegisterClick}>Regístrate</button>
          )}
          {isActive && (
            <button className="botones123" onClick={handleLoginClick}>Iniciar Sesión</button>
          )}
        </form>
      </div>
      
      <div className="toggle-container123">
        {isActive ? (
          <div className="toggle-panel123 toggle-right123">
            <h1>¡Hola, amigo!</h1>
            <p>Ingresa tus datos personales y empieza tu viaje con nosotros</p>
          </div>
        ) : (
          <div className="toggle-panel123 toggle-left123">
            <h1>¡Bienvenido de vuelta!</h1>
            <p>Para mantenerte conectado con nosotros, inicia sesión con tus datos personales</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthFormModal;
