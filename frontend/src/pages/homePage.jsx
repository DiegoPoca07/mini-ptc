import React from 'react';
import ReviewComponents from '../components/reviewComponents';
import './HomePage.css';

const HomePage = () => {
  // Datos mock para productos destacados
  // Cada producto tiene: id, nombre, precio, descuento, rating y número de reseñas
  const featuredProducts = [
    {
      id: 1,
      name: 'T-shirt with Tape Details',
      price: 130,
      oldPrice: 160, // Precio antes del descuento
      discount: 20,  // Porcentaje de descuento
      rating: 4.2,   // Calificación promedio
      reviewCount: 58, // Número de reseñas
      image: '../assets/camisa-negra.png'
    },
    {
      id: 2,
      name: 'Skinny Fit Jeans',
      price: 240,
      oldPrice: 260,
      discount: 20,
      rating: 3.9,
      reviewCount: 45,
      image: '../assets/pantalon-azul.png'
    },
    {
      id: 3,
      name: 'Checkered Shirt',
      price: 180,
      rating: 4.5,
      reviewCount: 62,
      image: '../assets/camisa-cuadriculada.png'
    },
    {
      id: 4,
      name: 'Sleeve Striped T-shirt',
      price: 130,
      oldPrice: 160,
      discount: 20,
      rating: 4.4,
      reviewCount: 37,
      image: '../assets/camisa-rayada.png'
    }
  ];

  // Datos mock para las categorías de estilos de vestir
  // Cada estilo tiene: id, nombre e imagen
  const dressStyles = [
    {
      id: 1,
      name: 'Casual',
      image: '/images/casual.jpg'
    },
    {
      id: 2,
      name: 'Formal',
      image: '/images/formal.jpg'
    },
    {
      id: 3,
      name: 'Fragrances',
      image: '/images/fragrances.jpg'
    },
    {
      id: 4,
      name: 'Gym',
      image: '/images/gym.jpg'
    }
  ];

  return (
    <div className="home-container">
      {/* Sección Hero - Banner principal */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Título principal y descripción */}
          <h1 className="hero-title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="hero-description">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="shop-now-btn">Shop Now</button>
          
          {/* Estadísticas de la empresa */}
          <div className="stats-container">
            {/* Cada stat-item muestra una métrica importante */}
            <div className="stat-item">
              <h3 className="stat-number">200+</h3>
              <p className="stat-description">Sustainable materials</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">2,000+</h3>
              <p className="stat-description">High-quality products</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">30,000+</h3>
              <p className="stat-description">Happy customers</p>
            </div>
          </div>
        </div>
        {/* Eslogan de la empresa */}
        <div className="hero-tagline">
          "Fashion that cares for the planet"
        </div>
      </section>

      {/* Sección de Nuevos Productos */}
      <section className="new-arrivals-section">
        <h2 className="section-title">NEW ARRIVALS</h2>
        <div className="products-grid">
          {/* Mapeo de productos para mostrar cards */}
          {featuredProducts.map(product => (
            <div className="product-card" key={product.id}>
              {/* Imagen del producto con badge de descuento condicional */}
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.discount && (
                  <span className="discount-badge">-{product.discount}%</span>
                )}
              </div>
              {/* Información del producto */}
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                {/* Sistema de calificación con estrellas */}
                <div className="product-rating">
                  <div className="stars">
                    {Array(5).fill().map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "star filled" : "star"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="review-count">({product.reviewCount})</span>
                </div>
                {/* Precios: actual y anterior si hay descuento */}
                <div className="product-price">
                  <span className="current-price">${product.price}</span>
                  {product.oldPrice && (
                    <span className="old-price">${product.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Botón para ver todos los productos */}
        <div className="view-all-container">
          <button className="view-all-btn">View All</button>
        </div>
      </section>

      {/* Sección de Categorías por Estilo */}
      <section className="dress-style-section">
        <h2 className="section-title">BROWSE BY DRESS STYLE</h2>
        <div className="dress-style-grid">
          {/* Mapeo de estilos de vestir */}
          {dressStyles.map(style => (
            <div className="dress-style-card" key={style.id}>
              <div className="style-image">
                <img src={style.image} alt={style.name} />
              </div>
              <h3 className="style-name">{style.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="testimonials-section">
        <h2 className="section-title">WHAT OUR CUSTOMERS SAY</h2>
        {/* Componentes de reseñas múltiples */}
        <ReviewComponents />
        <ReviewComponents />
        <ReviewComponents />
        <ReviewComponents />
        <ReviewComponents />
      </section>
    </div>
  );
};

export default HomePage;