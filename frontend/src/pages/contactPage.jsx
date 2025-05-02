import React, { useState } from 'react';
import './ContactPage.css';

// Componentes de iconos SVG personalizados para la interfaz
// Icono de correo electrónico
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

// Icono de teléfono
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

// Icono de ubicación
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// Icono de enviar para el botón del formulario
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

// Componente principal de la página de contacto
const ContactPage = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',    // Nombre del usuario
    email: '',   // Correo electrónico
    message: ''  // Mensaje del formulario
  });

  // Manejador para actualizar el estado cuando cambian los inputs
  // e: Evento del input que disparó el cambio
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Manejador para el envío del formulario
  // e: Evento del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    // Resetea el formulario después del envío
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    // Contenedor principal de la página
    <div className="contact-page">
      <div className="contact-container">
        {/* Sección izquierda - Información de contacto */}
        <div className="contact-info">
          {/* Título principal con diseño personalizado */}
          <h1 className="contact-headline">
            Let's discuss <br />
            on something <span className="highlight">cool</span> <br />
            together
          </h1>
          
          {/* Contenedor de detalles de contacto */}
          <div className="contact-details">
            {/* Email con icono y enlace */}
            <div className="contact-item">
              <EmailIcon />
              <a href="mailto:NaturaDeluxe@gmail.com" className="contact-link">NaturaDeluxe@gmail.com</a>
            </div>
            
            {/* Teléfono con icono y enlace */}
            <div className="contact-item">
              <PhoneIcon />
              <a href="tel:+50345697898" className="contact-link">+503 4569-7898</a>
            </div>
            
            {/* Dirección con icono */}
            <div className="contact-item">
              <LocationIcon />
              <span className="contact-text">123 Avenue Kotlin 456 House</span>
            </div>
          </div>
          
          {/* Enlaces a redes sociales */}
          <div className="social-links">
            {/* Links a redes sociales con iconos */}
            <a href="https://facebook.com/naturadeluxe" className="social-link" aria-label="Facebook">
              <img src="/images/facebook-icon.svg" alt="Facebook" />
            </a>
            <a href="https://instagram.com/naturadeluxe" className="social-link" aria-label="Instagram">
              <img src="/images/instagram-icon.svg" alt="Instagram" />
            </a>
            <a href="https://twitter.com/naturadeluxe" className="social-link" aria-label="Twitter">
              <img src="/images/twitter-icon.svg" alt="Twitter" />
            </a>
            <a href="https://tiktok.com/@naturadeluxe" className="social-link" aria-label="TikTok">
              <img src="/images/tiktok-icon.svg" alt="TikTok" />
            </a>
          </div>
        </div>
        
        {/* Sección derecha - Formulario de contacto */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="form-title">I'm interested in...</h2>
            
            {/* Campo de nombre */}
            <div className="form-group">
              <input 
                type="text"
                name="name"
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Campo de email */}
            <div className="form-group">
              <input 
                type="email"
                name="email"
                className="form-input"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Campo de mensaje */}
            <div className="form-group">
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            {/* Botón de envío con icono */}
            <button type="submit" className="send-button">
              <SendIcon />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;