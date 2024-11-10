import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AuthForm.css';

const AuthForm = ({ onLogin }) => {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory();

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

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
        if (response.status === 403) {
          setError(data.error); // Error específico para rol
        } else {
          throw new Error(data.error || 'Error en la autenticación');
        }
      } else {
        localStorage.setItem('token', data.token);
        localStorage.setItem('rol', data.rol); // Guardar el rol en localStorage

        if (isActive) {
          setSuccessMessage('Registro exitoso. ¡Bienvenido!');
          setName('');
          setEmail('');
          setPassword('');
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        } else {
          if (data.rol === 'admin') {
            onLogin(); // Llama a onLogin aquí solo si es inicio de sesión
            history.push('/FrontEnd-Pagina-HyA/admin'); // Redirigir solo si es un inicio de sesión y el rol es admin
          } else {
            setError('No tienes permisos de administrador'); // Mensaje de error si no es admin
          }
        }
      }
    } catch (err) {
      setError(err.message); // Establecer el mensaje de error para mostrar en el UI
    }
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <h1>Crear Cuenta</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>o usa tu email para registrarte</span>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button className='botones' type="submit">Regístrate</button>
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar el error aquí */}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleSubmit}>
          <h1>Iniciar Sesión</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>o usa tu email y contraseña</span>
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
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button className='botones' type="submit">Iniciar Sesión</button>
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar el error aquí */}
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>¡Bienvenido de vuelta!</h1>
            <p>Para mantenerte conectado con nosotros, inicia sesión con tus datos personales</p>
            <button className="hidden botones" onClick={handleLoginClick}>Iniciar Sesión</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>¡Hola, amigo!</h1>
            <p>Ingresa tus datos personales y empieza tu viaje con nosotros</p>
            <button className="hidden botones" onClick={handleRegisterClick}>Regístrate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
