import React, { useState } from 'react';
import './Footer.css';

// Iconos de redes sociales
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
    <path d="M16 8v8"></path>
    <path d="M12 16v8"></path>
    <path d="M20 12l-4-4"></path>
    <path d="M20 12h-4"></path>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    // Aquí iría la lógica para suscribir al usuario al newsletter
    alert(`¡Gracias por suscribirte con ${email}!`);
    setEmail('');
  };

  return (
    <footer className="footer">
      {/* Sección de Newsletter */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <h2 className="newsletter-title">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
          </div>
          <div className="newsletter-form-container">
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="input-container">
                <svg className="email-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="subscribe-btn">Subscribe to Newsletter</button>
            </form>
          </div>
        </div>
      </div>

      {/* Sección principal del footer */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Logo y descripción */}
          <div className="footer-brand">
            <h2 className="footer-logo">NaturaDeluxe</h2>
            <p className="footer-description">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            {/* Redes sociales */}
            <div className="footer-social">
              <a href="https://twitter.com/naturadeluxe" className="social-link" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com/naturadeluxe" className="social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com/naturadeluxe" className="social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://tiktok.com/@naturadeluxe" className="social-link" aria-label="TikTok">
                <TiktokIcon />
              </a>
            </div>
          </div>

          {/* Enlaces footer - Columna Compañía */}
          <div className="footer-links-column">
            <h3 className="footer-column-title">COMPANY</h3>
            <ul className="footer-links">
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/features" className="footer-link">Features</a></li>
              <li><a href="/works" className="footer-link">Works</a></li>
              <li><a href="/career" className="footer-link">Career</a></li>
            </ul>
          </div>

          {/* Enlaces footer - Columna Ayuda */}
          <div className="footer-links-column">
            <h3 className="footer-column-title">HELP</h3>
            <ul className="footer-links">
              <li><a href="/support" className="footer-link">Customer Support</a></li>
              <li><a href="/delivery" className="footer-link">Delivery Details</a></li>
              <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Enlaces footer - Columna FAQ */}
          <div className="footer-links-column">
            <h3 className="footer-column-title">FAQ</h3>
            <ul className="footer-links">
              <li><a href="/account" className="footer-link">Account</a></li>
              <li><a href="/manage-deliveries" className="footer-link">Manage Deliveries</a></li>
              <li><a href="/orders" className="footer-link">Orders</a></li>
              <li><a href="/payments" className="footer-link">Payments</a></li>
            </ul>
          </div>

          {/* Enlaces footer - Columna Recursos (opcional) */}
          <div className="footer-links-column">
            <h3 className="footer-column-title">RESOURCES</h3>
            <ul className="footer-links">
              <li><a href="/ebooks" className="footer-link">Free eBooks</a></li>
              <li><a href="/tutorials" className="footer-link">Development Tutorial</a></li>
              <li><a href="/blog" className="footer-link">How to - Blog</a></li>
              <li><a href="/youtube" className="footer-link">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección de copyright */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-copyright">
            <p>NaturaDeluxe © 2000-2023, All Rights Reserved</p>
          </div>
          <div className="footer-payment-methods">
            <img src="/images/payment/amex.png" alt="American Express" className="payment-icon" />
            <img src="/images/payment/visa.png" alt="Visa" className="payment-icon" />
            <img src="/images/payment/mastercard.png" alt="Mastercard" className="payment-icon" />
            <img src="/images/payment/paypal.png" alt="PayPal" className="payment-icon" />
            <img src="/images/payment/applepay.png" alt="Apple Pay" className="payment-icon" />
            <img src="/images/payment/googlepay.png" alt="Google Pay" className="payment-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;