import React, { useState } from 'react';
import './signupPage.css';
// Importación de recursos gráficos
import Logo from '../assets/logo.png';
import GoogleIcon from '../assets/Google.svg';

/**
 * Componente SignupPage
 * Renderiza el formulario de registro con opciones de email y Google
 * Incluye validación de campos y términos de servicio
 */
const SignupPage = () => {
  // Estados para manejar los campos del formulario
  const [username, setUsername] = useState(''); // Estado para el nombre de usuario
  const [email, setEmail] = useState('');      // Estado para el email
  const [password, setPassword] = useState(''); // Estado para la contraseña
  
  /**
   * Manejador del envío del formulario
   * @param {Event} e - Evento del formulario
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup with:', { username, email, password });
    // Aquí iría la lógica de registro con el backend
  };

  /**
   * Manejador para el registro con Google
   * Se implementará la integración con Firebase/Auth
   */
  const handleGoogleSignup = () => {
    console.log('Signup with Google');
    // Aquí iría la lógica de autenticación con Google
  };

  return (
    // Contenedor principal de la página de registro
    <div className="auth-page">
      {/* Contenedor del formulario de registro */}
      <div className="auth-container">
        {/* Logo y nombre de la marca */}
        <div className="auth-logo">
          <img src={Logo} alt="NaturaDeluxe Logo" className="logo-image" />
          <h1 className="brand-name">NaturaDeluxe</h1>
        </div>
        
        {/* Título y descripción del formulario */}
        <h2 className="auth-title">Create an account</h2>
        <p className="auth-subtitle">Enter your email to sign up for this app</p>
        
        {/* Formulario de registro */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Campo de nombre de usuario */}
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Username" 
              className="auth-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          {/* Campo de email */}
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email@example.com" 
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          {/* Campo de contraseña */}
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        
        {/* Botón de registro con Google */}
        <button 
          onClick={handleGoogleSignup} 
          className="google-button"
        >
          <img src={GoogleIcon} alt="Google" className="google-icon" />
          <span>Continue with Google</span>
        </button>
        
        {/* Texto de términos y condiciones con enlaces */}
        <p className="terms-text">
          By clicking continue, you agree to our{' '}
          <a href="/terms" className="terms-link">Terms of Service</a>{' '}
          and{' '}
          <a href="/privacy" className="terms-link">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;