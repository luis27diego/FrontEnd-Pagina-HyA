import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Detalles = ({ subtituloId }) => {
  const [detalles, setDetalles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realizar la consulta a la API
    axios.get(`https://web-production-10154.up.railway.app/api/detalles?subtituloId=${subtituloId}`)
      .then(response => {
        setDetalles(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [subtituloId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {detalles.length === 0 ? (
        <p>No hay detalles disponibles.</p>
      ) : (
        detalles.map(detalle => (
          <div key={detalle.ID_DETALLES}>
            <h3>{detalle.DEFINICION}</h3>
            {detalle.IMAGEN && (
              <img src={detalle.IMAGEN} alt={detalle.DEFINICION} />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Detalles;
