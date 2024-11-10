import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ModalGallery from '../ModalGallery';
import styles from './styles.module.css';

const TissueCardIntern = ({ title, category, description, images }) => {
    if (!images || images.length === 0) return null;

    // Función para ordenar las imágenes según el caption
    const sortImages = (images) => {
        const order = ['Porta', 'x4', 'x10', 'x40'];
        return images.sort((a, b) => {
            const indexA = order.indexOf(a.caption);
            const indexB = order.indexOf(b.caption);
            return (indexA === -1 ? order.length : indexA) - (indexB === -1 ? order.length : indexB);
        });
    };

    const sortedImages = sortImages(images);

    // Calcula el índice inicial basado en la cantidad de imágenes
    const initialSlideIndex = sortedImages.length === 3 ? 0 : (sortedImages.length === 4 ? 1 : 0);

    const [slideIndex, setSlideIndex] = useState(initialSlideIndex); // Inicializa con el índice calculado
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
    const [imageLoaded, setImageLoaded] = useState(false); // Estado para verificar si la imagen se ha cargado

    // Función para abrir el modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Verifica si la imagen se ha cargado
    useEffect(() => {
        const img = new Image();
        img.src = sortedImages[slideIndex].src;
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageLoaded(false);
    }, [slideIndex, sortedImages]);

    return (
        <div className={styles.tissueCardContainer}>
            <div className={styles.tissueCard}>
                <div className={styles.tissueCardImageContainer}>
                    <div 
                        className={styles.tissueCardImage} 
                        style={{ backgroundImage: imageLoaded ? `url(${sortedImages[slideIndex].src})` : 'none' }} // Cambia el fondo según el índice
                        onClick={openModal} // Abre el modal al hacer clic
                    >
                        {imageLoaded ? (
                            <span className={styles.tissueCardImageDescription}>
                                {sortedImages[slideIndex].caption} {/* Muestra la descripción */}
                            </span>
                        ) : (
                            <span className={styles.tissueCardLoadingText}>Cargando...</span> // Muestra un mensaje de carga
                        )}
                    </div>
                </div>
                <div className={styles.tissueCardBulletsContainer}>
                    {sortedImages.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.tissueCardBullet} ${slideIndex === index ? styles.tissueCardActiveBullet : ''}`}
                            onClick={() => setSlideIndex(index)} // Cambia el índice al hacer clic
                        />
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <ModalGallery 
                    images={sortedImages} 
                    slideIndex={slideIndex} 
                    setSlideIndex={setSlideIndex} 
                    closeModal={closeModal} // Pasa la función para cerrar el modal
                />
            )}
        </div>
    );
};

const TissueCard = ({ title, category, description, images }) => {
    return (
        <BrowserOnly>
            {() =>
                <TissueCardIntern
                    title={title}
                    category={category}
                    description={description}
                    images={images}
                />
            }
        </BrowserOnly>
    );
};

export default TissueCard;
