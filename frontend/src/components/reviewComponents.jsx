import React, { useState } from 'react';
// Importación de iconos necesarios de react-icons
import { FaStar, FaCheckCircle } from 'react-icons/fa'; 
import { BsThreeDotsVertical } from 'react-icons/bs';
// Importación de estilos CSS
import './reviewComponents.css'; 

// Componente Review que muestra una reseña individual
// Props:
// - rating: número de estrellas (default: 5)
function Review({ rating = 5 }) {
    // Estado para controlar la visibilidad del menú desplegable
    const [showMenu, setShowMenu] = useState(false);

    // Función para truncar el texto si excede la longitud máxima
    // Params:
    // - text: texto a truncar
    // - maxLength: longitud máxima permitida (default: 150)
    const truncateText = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    // Función para renderizar las estrellas según el rating
    // Crea un array de 5 elementos y mapea cada uno a un componente FaStar
    const renderStars = () => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={index < rating ? "star-filled" : "star-empty"}
            />
        ));
    };

    return (
        // Contenedor principal de la reseña
        <div className="review-container">
            {/* Cabecera de la reseña con estrellas y menú */}
            <div className="review-header">
                {/* Contenedor de las estrellas de calificación */}
                <div className="stars-container">
                    {renderStars()}
                </div>
                {/* Menú de opciones (tres puntos verticales) */}
                <div className="menu-container">
                    <BsThreeDotsVertical 
                        className="menu-icon"
                        onClick={() => setShowMenu(!showMenu)}
                    />
                    {/* Menú desplegable condicional */}
                    {showMenu && (
                        <div className="dropdown-menu">
                            <ul>
                                <li>Editar</li>
                                <li>Eliminar</li>
                                <li>Reportar</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {/* Nombre del reviewer con ícono de verificación */}
            <h1 className="reviewer">
                Paco Flores
                <FaCheckCircle className="verified-icon" />
            </h1>
            {/* Mensaje de la reseña con texto truncado */}
            <p className="review-message">
                {truncateText("El producto esta muy bueno igual que el dueño de la pagina y programador 🥵🥵🥵🥵 10 de 10 que buen servicio.")}
            </p>
            {/* Fecha de publicación de la reseña */}
            <h3 className="review-date">publicado el 24 de julio de 2025</h3>
        </div>
    );
}

export default Review;