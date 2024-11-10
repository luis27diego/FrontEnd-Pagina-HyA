import React from 'react';
import { useHistory } from 'react-router-dom';

const LogoutButton = ({ onLogout }) => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token
    onLogout(); // Actualiza el estado en AdminPage
    history.push('/admin'); // Redirige al login o a la página principal
  };

  return (
    <button onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
