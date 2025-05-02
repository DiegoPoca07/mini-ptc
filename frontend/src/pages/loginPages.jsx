import React, { useState } from 'react';
import './loginPages.css';
// Importación de assets necesarios
import Logo from '../assets/logo.png';
import GoogleIcon from '../assets/Google.svg';

/**
 * Componente LoginPage
 * Maneja la autenticación de usuarios a través de email y Google
 */
const LoginPage = () => {
  // Estado para manejar el input del email
  const [email, setEmail] = useState('');
  
  /**
   * Manejador del envío del formulario
   * @param {Event} e - Evento del formulario
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login with email:', email);
  };

  /**
   * Manejador para la autenticación con Google
   * Implementación pendiente para integración con Firebase/Auth
   */
  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  return (
    // Contenedor principal con fondo y centrado
    <div className="auth-page">
      {/* Contenedor del formulario de autenticación */}
      <div className="auth-container">
        {/* Header con logo y nombre de la marca */}
        <div className="auth-logo">
          <img src={Logo} alt="Logo" />
          <h1 className="brand-name">NaturaDeluxe</h1>
        </div>
        
        {/* Título y subtítulo de la página */}
        <h2 className="auth-title">Login</h2>
        <p className="auth-subtitle">Enter your email to sign up for this app</p>
        
        {/* Formulario de login con email */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Campo de email */}
          <div className="form-group">
            <input 
              type="email" 
              placeholder="email@domain.com" 
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          {/* Botón de envío del formulario */}
          <button type="submit" className="auth-button">
            Sign up with email
          </button>
        </form>
        
        {/* Separador con texto */}
        <div className="auth-divider">
          <span className="divider-text">or continue with</span>
        </div>
        
        {/* Botón de autenticación con Google */}
        <button 
          onClick={handleGoogleLogin} 
          className="google-button"
        >
          <img src={GoogleIcon} alt="Google" className="google-icon" />
          <span>Google</span>
        </button>
        
        {/* Texto de términos y condiciones */}
        <p className="terms-text">
          By clicking continue, you agree to our{' '}
          <a href="/terms" className="terms-link">Terms of Service</a>
          {' '}and{' '}
          <a href="/privacy" className="terms-link">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;