import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, X, Star, Filter } from 'lucide-react';
import './categoryPage.css';

export default function CategoryPage() {
  const [expandedFilters, setExpandedFilters] = useState({
    colors: true,
    size: true,
    dressStyle: true,
  });

  const [priceRange, setPriceRange] = useState([50, 300]);

  const toggleFilter = (filter) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const clothingItems = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      rating: 4.8,
      reviews: 820,
      price: 45,
      originalPrice: null,
      discount: null,
      image: "/api/placeholder/240/240",
      row: 1,
      col: 1
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      rating: 4.7,
      reviews: 430,
      price: 180,
      originalPrice: null,
      discount: null,
      image: "/api/placeholder/240/240",
      row: 1,
      col: 2
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      rating: 4.9,
      reviews: 620,
      price: 120,
      originalPrice: 160,
      discount: 25,
      image: "/api/placeholder/240/240",
      row: 1,
      col: 3
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      rating: 4.7,
      reviews: 345,
      price: 240,
      originalPrice: 260,
      discount: 8,
      image: "/api/placeholder/240/240",
      row: 2,
      col: 1
    },
    {
      id: 5,
      name: "Checkered Shirt",
      rating: 4.8,
      reviews: 520,
      price: 180,
      originalPrice: null,
      discount: null,
      image: "/api/placeholder/240/240",
      row: 2,
      col: 2
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      rating: 4.9,
      reviews: 715,
      price: 130,
      originalPrice: 160,
      discount: 20,
      image: "/api/placeholder/240/240",
      row: 2,
      col: 3
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      rating: 4.8,
      reviews: 410,
      price: 212,
      originalPrice: 232,
      discount: 9,
      image: "/api/placeholder/240/240",
      row: 3,
      col: 1
    },
    {
      id: 8,
      name: "Grunge Graphic T-shirt",
      rating: 4.7,
      reviews: 380,
      price: 145,
      originalPrice: null,
      discount: null,
      image: "/api/placeholder/240/240",
      row: 3,
      col: 2
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      rating: 4.6,
      reviews: 520,
      price: 80,
      originalPrice: null,
      discount: null,
      image: "/api/placeholder/240/240",
      row: 3,
      col: 3
    }
  ];

  const categories = [
    { name: "T-shirts", count: 7 },
    { name: "Shirts", count: 5 },
    { name: "Shorts", count: 8 },
    { name: "Hoodies", count: 4 },
    { name: "Jeans", count: 6 }
  ];

  const colors = [
    { color: "green", name: "green" },
    { color: "red", name: "red" },
    { color: "yellow", name: "yellow" },
    { color: "orange", name: "orange" },
    { color: "blue", name: "blue" },
    { color: "purple", name: "purple" },
    { color: "pink", name: "pink" },
    { color: "black", name: "black" }
  ];

  const sizes = [
    "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large"
  ];

  const dressStyles = [
    { name: "Casual", count: 12 },
    { name: "Formal", count: 8 },
    { name: "Party", count: 5 },
    { name: "Gym", count: 7 }
  ];

  return (
    <div className="store-page-container">
      <div className="breadcrumb-container">
        <nav className="breadcrumb-nav">
          <ol className="breadcrumb-list">
            <li>
              <a href="#" className="breadcrumb-link">Home</a>
            </li>
            <li className="breadcrumb-separator">
              <ChevronRight size={16} />
            </li>
            <li className="breadcrumb-current">
              Casual
            </li>
          </ol>
        </nav>
      </div>

      <div className="main-content">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2 className="sidebar-title">Filters</h2>
            <Filter size={18} className="filter-icon" />
          </div>

          <div className="filter-section">
            <ul className="category-list">
              {categories.map((category, idx) => (
                <li key={idx} className="category-item">
                  <span>{category.name}</span>
                  <span className="category-count">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Price</h3>
            <div className="price-slider-container">
              <div className="price-slider-track">
                <div className="price-slider-fill"></div>
                <div className="price-slider-handle price-slider-handle-min"></div>
                <div className="price-slider-handle price-slider-handle-max"></div>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter('colors')}>
              <h3 className="filter-title">Colors</h3>
              {expandedFilters.colors ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            
            {expandedFilters.colors && (
              <div className="color-grid">
                {colors.map((color, idx) => (
                  <div key={idx} className="color-container">
                    <div className={`color-swatch ${color.color}`}></div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter('size')}>
              <h3 className="filter-title">Size</h3>
              {expandedFilters.size ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            
            {expandedFilters.size && (
              <div className="size-grid">
                {sizes.map((size, idx) => (
                  <div key={idx} className="size-item">
                    {size}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleFilter('dressStyle')}>
              <h3 className="filter-title">Dress Style</h3>
              {expandedFilters.dressStyle ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            
            {expandedFilters.dressStyle && (
              <ul className="style-list">
                {dressStyles.map((style, idx) => (
                  <li key={idx} className="style-item">
                    <span>{style.name}</span>
                    <span className="style-count">{style.count}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="apply-filter-btn">Apply Filter</button>
        </aside>

        <div className="product-area">
          <div className="product-header">
            <h1 className="product-title">Casual</h1>
            <div className="product-sorting">
              <span className="product-count">Showing 1-9 of 820 Products</span>
              <span className="sort-label">Sort By:</span>
              <select className="sort-select">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {clothingItems.map((item) => (
              <div key={item.id} className="product-card">
                <div className="product-image-container">
                  <img src={item.image} alt={item.name} className="product-image" />
                </div>
                <div className="product-details">
                  <h3 className="product-name">{item.name}</h3>
                  <div className="product-rating">
                    <div className="star-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(item.rating) ? "star-filled" : "star-empty"}
                        />
                      ))}
                    </div>
                    <span className="review-count">{item.reviews}</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">${item.price}</span>
                    {item.originalPrice && (
                      <>
                        <span className="original-price">${item.originalPrice}</span>
                        <span className="discount-badge">-{item.discount}%</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="pagination-prev">
              <ChevronLeft size={16} className="pagination-icon" />
              Previous
            </button>
            <div className="pagination-numbers">
              <div className="page-number active">1</div>
              <div className="page-number">2</div>
              <div className="page-number">3</div>
              <div className="page-number">4</div>
              <div className="page-number">5</div>
            </div>
            <button className="pagination-next">
              Next
              <ChevronRight size={16} className="pagination-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChevronLeft = ({ size, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};