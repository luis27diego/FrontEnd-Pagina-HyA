import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '@site/src/components/Admin/logincheto';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Estado para la carga
  const history = useHistory();

  // Verificar si el usuario ya tiene un token de autenticación
  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      history.push('/admin'); // Redirigir si ya está autenticado
    }
    setLoading(false);
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  if (loading) {
    return <div>Cargando...</div>; // Mostrar un indicador de carga mientras se valida la autenticación
  }

  return (
    <div>
      {!isLoggedIn ? (
        <AuthForm onLoginSuccess={() => setIsLoggedIn(true)} /> // Permitir un callback en AuthForm para actualizar el estado de autenticación
      ) : (
        <div>Redirigiendo al panel de administración...</div>
      )}
    </div>
  );
};

export default AdminPage;
