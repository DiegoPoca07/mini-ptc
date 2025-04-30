import React from 'react';
import ReviewComponents from '../components/reviewComponents';
import './HomePage.css';

const HomePage = () => {
  // Datos de ejemplo para productos destacados
  const featuredProducts = [
    {
      id: 1,
      name: 'T-shirt with Tape Details',
      price: 130,
      oldPrice: 160,
      discount: 20,
      rating: 4.2,
      reviewCount: 58,
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

  // Categorías de estilo de vestimenta
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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="hero-description">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="shop-now-btn">Shop Now</button>
          
          <div className="stats-container">
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
        <div className="hero-tagline">
          "Fashion that cares for the planet"
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals-section">
        <h2 className="section-title">NEW ARRIVALS</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.discount && (
                  <span className="discount-badge">-{product.discount}%</span>
                )}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
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
        <div className="view-all-container">
          <button className="view-all-btn">View All</button>
        </div>
      </section>

      {/* Browse by Dress Style Section */}
      <section className="dress-style-section">
        <h2 className="section-title">BROWSE BY DRESS STYLE</h2>
        <div className="dress-style-grid">
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


      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">WHAT OUR CUSTOMERS SAY</h2>
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