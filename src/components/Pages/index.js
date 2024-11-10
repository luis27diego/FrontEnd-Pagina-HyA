import React from 'react';

const CustomComponent = ({ title, subtitle, definition, imageUrl, imageAlt }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{definition}</p>
      <img src={imageUrl} alt={imageAlt} style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default CustomComponent;
