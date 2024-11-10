import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import TissueCard from '../TissueCard';
import EditSubtituloForm from '../EditSubtituloForm';
import AuthFormModal from '../loginModal/';
import './subDetalles.css';

Modal.setAppElement('#__docusaurus');

const SubtitulosConDetalles = ({ paginaId }) => {
  const [subtitulos, setSubtitulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingSubtitulo, setEditingSubtitulo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchSubtitulos = async () => {
      try {
        const response = await axios.get(`https://web-production-10154.up.railway.app/api/subtitulos_con_detalles?paginaId=${paginaId}`);
        setSubtitulos(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubtitulos();

    if (localStorage.getItem('token_user')) {
      setIsAuthenticated(true);
    }

    const handleStorageChange = (event) => {
      if (event.key === 'token_user') {
        setIsAuthenticated(!!event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [paginaId]);

  const handleEditClick = (subtitulo) => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
    } else {
      setEditingSubtitulo(subtitulo);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingSubtitulo(null);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      await axios.post(`https://web-production-10154.up.railway.app/api/sugerir_definicion`, formData);
      closeModal();
      const response = await axios.get(`https://web-production-10154.up.railway.app/api/subtitulos_con_detalles?paginaId=${paginaId}`);
      setSubtitulos(response.data);
    } catch (err) {
      console.error("Error enviando la sugerencia:", err);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token_user');
    setIsAuthenticated(false);
    closeModal();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {subtitulos.map(subtitulo => (
        <div key={subtitulo.ID_SUBTITULO} className="subtitulo-container">
          <h2 className="subtitulo-titulo">{subtitulo.TITULO}</h2>
          {subtitulo.DETALLES.length > 0 ? (
            <div className="detalles-container">
              {subtitulo.DETALLES.map(detalle => (
                <div key={detalle.ID_DETALLES} className="detalle">
                  <h3 className="detalle-definicion" dangerouslySetInnerHTML={{ __html: detalle.DEFINICION }} />
                  {detalle.IMAGENES && detalle.IMAGENES.length > 0 ? (
                    <TissueCard
                      title={subtitulo.TITULO}
                      category={subtitulo.TITULO}
                      description={detalle.DEFINICION}
                      images={detalle.IMAGENES.map((imagen) => ({
                        src: imagen.URL_IMAGEN,
                        caption: imagen.CAPTION || 'Descripción no proporcionada'
                      }))}
                    />
                  ) : (
                    <p className="no-imagenes">No hay imágenes disponibles.</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="no-detalles">No hay detalles disponibles.</p>
          )}
          <button onClick={() => handleEditClick(subtitulo)} className="edit-button">Editar</button>
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Editar Subtítulo"
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 15 },
          content: {
            top: '54%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '600px',
            backgroundColor: 'var(--modal-bg-color)',
            color: 'var(--modal-text-color)',
            border: 'none',
          },
        }}
      >
        {editingSubtitulo && (
          <div>
            <h2>Editando: {editingSubtitulo.TITULO}</h2>
            <EditSubtituloForm subtitulo={editingSubtitulo} onSubmit={handleFormSubmit} onLogout={handleLogout} />
            <button onClick={closeModal} className="modal-close-button">Cerrar</button>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={isAuthModalOpen}
        onRequestClose={closeAuthModal}
        contentLabel="Iniciar Sesión"
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 15 },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '800px',
            maxHeight: '80vh',
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: '0px',
            backgroundColor: 'transparent',
            border: 'none',
          },
        }}
      >
        <AuthFormModal onLogin={handleLogin} />
      </Modal>
    </div>
  );
};

export default SubtitulosConDetalles;
