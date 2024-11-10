import React, { useState } from 'react';
import './edit.css';

const EditSubtituloForm = ({ subtitulo, onSubmit, onLogout }) => {
  const [title, setTitle] = useState(subtitulo.TITULO);
  const [details, setDetails] = useState(subtitulo.DETALLES.map(detalle => ({
    ...detalle,
    image: null,
    imagePreview: detalle.IMAGEN_URL || null // URL de imagen inicial si existe
  })));

  const handleDetailChange = (index, key, value) => {
    const updatedDetails = [...details];
    updatedDetails[index][key] = value;

    if (key === 'image') {
      // Actualizar la vista previa de la imagen
      const file = value;
      updatedDetails[index].imagePreview = file ? URL.createObjectURL(file) : null;
    }

    setDetails(updatedDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);

    details.forEach((detalle) => {
      formData.append(`details[${detalle.ID_DETALLES}][id]`, detalle.ID_DETALLES);
      formData.append(`details[${detalle.ID_DETALLES}][definition]`, detalle.DEFINICION);
      if (detalle.image) {
        formData.append(`details[${detalle.ID_DETALLES}][image]`, detalle.image);
      }
    });

    console.log("Datos del formulario enviados:");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value instanceof File ? value.name : value}`);
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form modal-container">
      <div className="edit-form__header">
        <h2>Editar Subtítulo</h2>
        <button onClick={onLogout} className="edit-form__logout-button">Cerrar sesión</button>
      </div>
      <div className="edit-form__group">
        <label className="edit-form__label">Título del Subtítulo:</label>
        <input
          type="text"
          className="edit-form__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {details.map((detalle, index) => (
        <div key={detalle.ID_DETALLES} className="edit-form__group">
          <label className="edit-form__label">Definición:</label>
          <textarea
            className="edit-form__textarea"
            value={detalle.DEFINICION}
            onChange={(e) => handleDetailChange(index, 'DEFINICION', e.target.value)}
          />
          <label className="edit-form__label">Imagen:</label>
          <input
            type="file"
            className="edit-form__file"
            onChange={(e) => handleDetailChange(index, 'image', e.target.files[0])}
          />
          {detalle.imagePreview && (
            <img
              src={detalle.imagePreview}
              alt="Vista previa de la imagen"
              className="edit-form__image-preview"
            />
          )}
        </div>
      ))}
      <button type="submit" className="edit-form__button">Guardar cambios</button>
    </form>
  );
};

export default EditSubtituloForm;
