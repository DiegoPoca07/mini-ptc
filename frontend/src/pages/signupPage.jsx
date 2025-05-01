import React, { useState } from 'react';
import './signupPage.css';
import Logo from '../assets/logo.png'; // Asegúrate que la ruta sea correcta
import GoogleIcon from '../assets/Google.svg'; // Añade este ícono a tus assets

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup with:', { username, email, password });
  };

  const handleGoogleSignup = () => {
    console.log('Signup with Google');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-logo">
          <img src={Logo} alt="NaturaDeluxe Logo" className="logo-image" />
          <h1 className="brand-name">NaturaDeluxe</h1>
        </div>
        
        <h2 className="auth-title">Create an account</h2>
        <p className="auth-subtitle">Enter your email to sign up for this app</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
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
          
          <button type="submit" className="auth-button">
            Sign up with email
          </button>
        </form>
        
        <div className="auth-divider">
          <span className="divider-text">or continue with</span>
        </div>
        
        <button 
          onClick={handleGoogleSignup} 
          className="google-button"
        >
          <img src={GoogleIcon} alt="Google" className="google-icon" />
          <span>Continue with Google</span>
        </button>
        
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