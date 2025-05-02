import React from 'react';
// Importación del componente Review que renderiza las reseñas individuales
import Review from "../components/reviewComponents";
// Importación de los estilos CSS específicos para esta página
import "./review.css"; 

/**
 * Componente ReviewPage
 * Renderiza una página que muestra todas las reseñas de los usuarios
 * Incluye filtros de ordenamiento y la opción de escribir nuevas reseñas
 */
function ReviewPage() {
    return (
        // Contenedor principal de la página de reseñas
        <div className="review-page">
            {/* Encabezado con título y controles */}
            <header className="review-page__header">
                {/* Grupo del título y contador de reseñas */}
                <div className="review-page__title-group">
                    <h1 className="review-page__title">All Reviews</h1>
                    <span className="review-page__count">(451)</span>
                </div>
                
                {/* Contenedor de acciones: filtros y botón de escribir reseña */}
                <div className="review-page__actions">
                    {/* Selector para filtrar reseñas */}
                    <div className="review-page__filter">
                        <select className="review-page__select">
                            <option value="recent">Most Recent</option>
                            <option value="highest">Highest Rated</option>
                            <option value="lowest">Lowest Rated</option>
                        </select>
                    </div>
                    {/* Botón para escribir una nueva reseña */}
                    <button className="review-page__write-btn">Write Review</button>
                </div>
            </header>

            {/* Contenido principal con el grid de reseñas */}
            <main className="review-page__content">
                {/* Grid que contiene todas las reseñas */}
                <div className="review-page__grid">
                    {/* Renderizado de múltiples componentes Review con diferentes calificaciones */}
                    <Review rating={5} />
                    <Review rating={4} />
                    <Review rating={3} />
                    <Review rating={2} />
                    <Review rating={1} />
                    <Review rating={1} />
                </div>
                
                {/* Botón para cargar más reseñas (paginación) */}
                <button className="review-page__load-more">
                    Load More Reviews
                </button>
            </main>
        </div>
    );
}

export default ReviewPage;