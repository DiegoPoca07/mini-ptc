import React from 'react';
// Importación de estilos específicos para la página de términos
import './termsPages.css';

/**
 * Componente TermsPage
 * Renderiza la página de términos y condiciones
 * Contiene todas las secciones legales y políticas del sitio
 */
const TermsPage = () => {
  return (
    // Contenedor principal de la página
    <div className="terms-page-container">
      {/* Título principal de la página */}
      <h1 className="terms-title">Terms and Conditions</h1>
      
      {/* Contenedor del contenido principal */}
      <div className="terms-content">
        {/* Sección de Introducción */}
        <section className="terms-section">
          <h2>1. Introduction</h2>
          <p>Welcome to NaturaDeluxe. By accessing and using our website...</p>
        </section>

        {/* Sección de Uso del Sitio Web */}
        <section className="terms-section">
          <h2>2. Use of the Website</h2>
          <p>The content of this website is for your general information...</p>
          
          {/* Subsección de Registro de Cuenta */}
          <h3>2.1 Account Registration</h3>
          <p>To access certain features of the website...</p>
          
          {/* Subsección de Actividades Prohibidas */}
          <h3>2.2 Prohibited Activities</h3>
          <p>You are prohibited from using the website...</p>
        </section>

        {/* Sección de Productos y Transacciones */}
        <section className="terms-section">
          <h2>3. Products and Transactions</h2>
          <p>All products displayed on our website...</p>
          
          {/* Subsección de Procesamiento de Pedidos */}
          <h3>3.1 Order Processing</h3>
          <p>Upon placing an order...</p>
          
          {/* Subsección de Pagos */}
          <h3>3.2 Payment</h3>
          <p>We accept various payment methods...</p>
        </section>

        {/* Secciones adicionales de términos legales */}
        <section className="terms-section">
          <h2>4. Shipping and Delivery</h2>
          <p>We strive to deliver products...</p>
        </section>

        {/* ...existing sections... */}

        {/* Sección final con información de contacto */}
        <section className="terms-section">
          <h2>10. Contact Information</h2>
          <p>If you have any questions about these terms...</p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;