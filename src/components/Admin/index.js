  import { useEffect, useState } from 'react'; 
  import axios from 'axios';
  import './SugerenciasPendientes.css';

  const SugerenciasPendientes = () => {
    const [sugerencias, setSugerencias] = useState([]);
    const [mensaje, setMensaje] = useState(''); // Estado para almacenar el mensaje de confirmación

    // Realizar la petición al cargar el componente
    const fetchSugerencias = async () => {
      const token = localStorage.getItem('token'); // Obtener el token

      try {
        const response = await axios.get('https://web-production-10154.up.railway.app/api/obtener_sugerencias', {
          headers: {
            'x-access-tokens': token // Agregar el token a los headers
          }
        });
        setSugerencias(response.data);
      } catch (error) {
        console.error("Error al obtener sugerencias pendientes", error);
      }
    };

    useEffect(() => {
      fetchSugerencias();
    }, []);

    const aprobarSugerencia = async (id_sugerencia) => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.post(`https://web-production-10154.up.railway.app/api/aprobar_sugerencia/${id_sugerencia}`, {}, {
          headers: {
            'x-access-tokens': token
          }
        });
        console.log(response.data.message);
        setMensaje('Sugerencia aprobada'); // Establece el mensaje
        fetchSugerencias(); // Volver a cargar las sugerencias después de aprobar

        // Limpia el mensaje después de 3 segundos
        setTimeout(() => setMensaje(''), 3000);
      } catch (error) {
        console.error("Error al aprobar sugerencia", error);
      }
    };

    const rechazarSugerencia = async (id_sugerencia) => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.post(`https://web-production-10154.up.railway.app/api/rechazar_sugerencia/${id_sugerencia}`, {}, {
          headers: {
            'x-access-tokens': token
          }
        });
        console.log(response.data.message);
        setMensaje('Sugerencia rechazada'); // Establece el mensaje
        fetchSugerencias(); // Volver a cargar las sugerencias después de rechazar

        // Limpia el mensaje después de 3 segundos
        setTimeout(() => setMensaje(''), 3000);
      } catch (error) {
        console.error("Error al rechazar sugerencia", error);
      }
    };

    return (
      <div>
        {/* Mostrar el mensaje de confirmación si existe */}
        {mensaje && <div className="mensaje-confirmacion">{mensaje}</div>}

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Clasificación</th>
              <th>Nombre de la Página</th>
              <th>Nombre del Subtítulo</th>
              <th>Subtitulo Sugerido</th>
              <th>Definicion</th>
              <th>Tipo de Cambio</th>
              <th>Fecha de Envío</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {sugerencias.map((sugerencia) => (
              <tr key={sugerencia.id_sugerencia}>
                <td>{sugerencia.id_sugerencia}</td>
                <td>{sugerencia.nombre_tejido}</td> {/* Mostrar el nombre de su tejido (clasificación) */}
                <td>{sugerencia.titulo_pagina}</td>
                <td>{sugerencia.nombre_subtitulo}</td> {/* Mostrar el nombre del subtítulo */}
                <td>{sugerencia.titulo_subtitulo_sugerido}</td>
                <td>{sugerencia.definicion}</td>
                <td>{sugerencia.tipo_cambio}</td> {/* Mostrar el tipo de cambio */}
                <td>{sugerencia.fecha_envio}</td>
                <td>
                  <button className="btn aprobar" onClick={() => aprobarSugerencia(sugerencia.id_sugerencia)}>Aprobar</button>
                  <button className="btn rechazar" onClick={() => rechazarSugerencia(sugerencia.id_sugerencia)}>Rechazar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default SugerenciasPendientes;
