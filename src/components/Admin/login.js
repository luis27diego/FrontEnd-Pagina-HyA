// src/components/Admin/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Asegúrate de tener react-router instalado

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://web-production-10154.up.railway.app/auth/login', { // Endpoint de tu API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, contraseña: password }), // Asegúrate de que las claves coincidan
      });

      if (!response.ok) {
        throw new Error('Login failed: ' + (await response.json()).error);
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); // Guardar el token en localStorage
      onLogin(); // Cambiar el estado de inicio de sesión en el componente padre
      history.push('/admin'); // Redirigir al panel de administración
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
