import { useState } from 'react';
import { ChevronRight, ShoppingBag, Minus, Plus, X, Tag } from 'lucide-react';
import './ShoppingCartPage.css';

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "Multi",
      price: 145,
      quantity: 1,
      image: "/api/placeholder/120/120",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "/api/placeholder/120/120",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/api/placeholder/120/120",
    }
  ]);

  const [promoCode, setPromoCode] = useState('');

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Apply discount (20%)
  const discountRate = 0.2;
  const discountAmount = subtotal * discountRate;
  
  // Delivery fee
  const deliveryFee = 15;
  
  // Calculate total
  const total = subtotal - discountAmount + deliveryFee;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const applyPromoCode = () => {
    // Logic to apply promo code would go here
    console.log('Applying promo code:', promoCode);
  };

  return (
    <div className="cart-container">
      {/* Header with breadcrumbs */}
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
              Cart
            </li>
          </ol>
        </nav>
      </div>

      <h1 className="cart-title">Your cart</h1>

      <div className="cart-content">
        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image-container">
                <img src={item.image} alt={item.name} className="item-image" />
              </div>
              
              <div className="item-details">
                <div className="item-header">
                  <h3 className="item-name">{item.name}</h3>
                  <button 
                    className="remove-item-btn" 
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                <div className="item-attributes">
                  <p className="item-attribute">Size: {item.size}</p>
                  <p className="item-attribute">Color: {item.color}</p>
                </div>
                
                <div className="item-price-quantity">
                  <span className="item-price">${item.price}</span>
                  
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    
                    <span className="quantity-value">{item.quantity}</span>
                    
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2 className="summary-title">Order Summary</h2>
          
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span className="summary-amount">${subtotal}</span>
            </div>
            
            <div className="summary-row">
              <span>Discount ({Math.round(discountRate * 100)}%)</span>
              <span className="summary-discount">-${discountAmount}</span>
            </div>
            
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span className="summary-amount">${deliveryFee}</span>
            </div>
            
            <div className="summary-row total-row">
              <span>Total</span>
              <span className="summary-total">${total}</span>
            </div>
          </div>
          
          <div className="promo-code">
            <div className="promo-input-container">
              <Tag size={16} className="promo-icon" />
              <input 
                type="text" 
                className="promo-input" 
                placeholder="Add promo code" 
                value={promoCode}
                onChange={handlePromoCodeChange}
              />
            </div>
            
            <button 
              className="apply-btn" 
              onClick={applyPromoCode}
            >
              Apply
            </button>
          </div>
          
          <button className="checkout-btn">
            Go to Checkout
            <ChevronRight size={18} className="checkout-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}