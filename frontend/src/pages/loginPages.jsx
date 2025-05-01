import React, { useState } from 'react';
import './loginPages.css';
import Logo from '../assets/logo.png';
import GoogleIcon from '../assets/Google.svg'; // Asegúrate que la ruta sea correcta

const LoginPage = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login with email:', email);
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-logo">
          <img src={Logo} alt="Logo" />
          <h1 className="brand-name">NaturaDeluxe</h1>
        </div>
        
        <h2 className="auth-title">Login</h2>
        <p className="auth-subtitle">Enter your email to sign up for this app</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
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
          
          <button type="submit" className="auth-button">Sign up with email</button>
        </form>
        
        <div className="auth-divider">
          <span className="divider-text">or continue with</span>
        </div>
        
        <button 
          onClick={handleGoogleLogin} 
          className="google-button"
        >
          <img src= {GoogleIcon} alt="Google" className="google-icon" />
          <span>Google</span>
        </button>
        
        <p className="terms-text">
          By clicking continue, you agree to our <a href="/terms" className="terms-link">Terms of Service</a> and <a href="/privacy" className="terms-link">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;