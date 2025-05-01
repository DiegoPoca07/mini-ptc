import React, { useState } from 'react';
import { FaStar, FaCheckCircle } from 'react-icons/fa'; 
import { BsThreeDotsVertical } from 'react-icons/bs';
import './reviewComponents.css'; 

function Review({ rating = 5 }) {
    const [showMenu, setShowMenu] = useState(false);

    // Función para truncar el texto
    const truncateText = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    // Renderiza las estrellas basado en el rating
    const renderStars = () => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={index < rating ? "star-filled" : "star-empty"}
            />
        ));
    };

    return (
        <div className="review-container">
            <div className="review-header">
                <div className="stars-container">
                    {renderStars()}
                </div>
                <div className="menu-container">
                    <BsThreeDotsVertical 
                        className="menu-icon"
                        onClick={() => setShowMenu(!showMenu)}
                    />
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
            <h1 className="reviewer">
                Paco Flores
                <FaCheckCircle className="verified-icon" />
            </h1>
            <p className="review-message">
                {truncateText("El producto esta muy bueno igual que el dueño de la pagina y programador 🥵🥵🥵🥵 10 de 10 que buen servicio.")}
            </p>
            <h3 className="review-date">publicado el 24 de julio de 2025</h3>
        </div>
    );
}

export default Review;