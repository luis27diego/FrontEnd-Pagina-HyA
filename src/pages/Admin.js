import React, { useEffect, useState } from 'react';
import SugerenciasPendientes from '@site/src/components/Admin/index';
import Login from '@site/src/components/Admin/logincheto';
import LogoutButton from '@site/src/components/Admin/botonexit';
import '@site/src/components/Admin/paginaAdmin.css'; // Importar los estilos

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div className="admin-container">
      {!isLoggedIn ? (
        <Login onLogin={() => checkLoginStatus()} />
      ) : (
        <>
          <LogoutButton onLogout={() => setIsLoggedIn(false)} />
          <div className="table-container">
            <SugerenciasPendientes />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPage;
