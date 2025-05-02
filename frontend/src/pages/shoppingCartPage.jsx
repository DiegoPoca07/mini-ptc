import { useState } from 'react';
// Importación de iconos de Lucide React
import { ChevronRight, ShoppingBag, Minus, Plus, X, Tag } from 'lucide-react';
import './ShoppingCartPage.css';
// Importación de imágenes de productos
import camisaNaranja from '../assets/camisa-naranja.png';
import camisaCuadriculada from '../assets/camisa-cuadriculada.png';
import pantalonAzul from '../assets/pantalon-azul.png';

/**
 * Componente ShoppingCart
 * Renderiza la página del carrito de compras con la lista de productos
 * y el resumen del pedido
 */
export default function ShoppingCart() {
  // Estado para los items del carrito
  // Cada item contiene: id, nombre, talla, color, precio, cantidad e imagen
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "Multi",
      price: 145,
      quantity: 1,
      image: camisaNaranja,
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: camisaCuadriculada,
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: pantalonAzul,
    }
  ]);

  // Estado para el código promocional
  const [promoCode, setPromoCode] = useState('');

  // Cálculo del subtotal sumando el precio * cantidad de cada item
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Aplicación del descuento (20%)
  const discountRate = 0.2;
  const discountAmount = subtotal * discountRate;
  
  // Cargo por envío
  const deliveryFee = 15;
  
  // Cálculo del total final
  const total = subtotal - discountAmount + deliveryFee;

  /**
   * Función para actualizar la cantidad de un producto
   * @param {number} id - ID del producto a actualizar
   * @param {number} newQuantity - Nueva cantidad del producto
   */
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  /**
   * Función para eliminar un producto del carrito
   * @param {number} id - ID del producto a eliminar
   */
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  /**
   * Manejador del cambio en el input del código promocional
   */
  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  /**
   * Función para aplicar el código promocional
   * Por implementar lógica específica
   */
  const applyPromoCode = () => {
    console.log('Aplicando código promocional:', promoCode);
  };

  return (
    <div className="cart-container">
      {/* Navegación de migas de pan */}
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
        {/* Lista de productos en el carrito */}
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              {/* Contenedor de la imagen del producto */}
              <div className="item-image-container">
                <img src={item.image} alt={item.name} className="item-image" />
              </div>
              
              {/* Detalles del producto */}
              <div className="item-details">
                {/* Cabecera con nombre y botón de eliminar */}
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
                
                {/* Atributos del producto (talla y color) */}
                <div className="item-attributes">
                  <p className="item-attribute">Size: {item.size}</p>
                  <p className="item-attribute">Color: {item.color}</p>
                </div>
                
                {/* Precio y controles de cantidad */}
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

        {/* Resumen del pedido */}
        <div className="order-summary">
          <h2 className="summary-title">Order Summary</h2>
          
          {/* Detalles del costo */}
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
          
          {/* Input para código promocional */}
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
          
          {/* Botón de checkout */}
          <button className="checkout-btn">
            Go to Checkout
            <ChevronRight size={18} className="checkout-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}