import React from "react";
import "./footer.css"; // Asegúrate de que la ruta sea correcta

function Footer() {
  return (
    <footer className="footer">
      {/* Primera parte del footer */}
      <div className="footer__section footer__section--primary">
        <h1 className="footer__title">Título del Footer</h1>
        <div className="footer__input-group">
          <input
            type="text"
            className="footer__input"
            placeholder="Escribe algo..."
          />
          <button className="footer__button">Enviar</button>
        </div>
      </div>

      {/* Segunda parte del footer */}
      <div className="footer__section footer__section--secondary">
        <div className="footer__info">
          <h3 className="footer__subtitle">Subtítulo</h3>
          <p className="footer__text">Texto descriptivo aquí.</p>
          <div className="footer__social-icons">
            <img src="" alt="Icono 1" className="footer__icon" />
            <img src="" alt="Icono 2" className="footer__icon" />
            <img src="" alt="Icono 3" className="footer__icon" />
            <img src="" alt="Icono 4" className="footer__icon" />
          </div>
        </div>

        <div className="footer__links">
          <ul className="footer__link-list">
            <li className="footer__link-item">Enlace 1</li>
            <li className="footer__link-item">Enlace 2</li>
            <li className="footer__link-item">Enlace 3</li>
            <li className="footer__link-item">Enlace 4</li>
          </ul>
          <ul className="footer__link-list">
            <li className="footer__link-item">Enlace 5</li>
            <li className="footer__link-item">Enlace 6</li>
            <li className="footer__link-item">Enlace 7</li>
            <li className="footer__link-item">Enlace 8</li>
          </ul>
          <ul className="footer__link-list">
            <li className="footer__link-item">Enlace 9</li>
            <li className="footer__link-item">Enlace 10</li>
            <li className="footer__link-item">Enlace 11</li>
            <li className="footer__link-item">Enlace 12</li>
          </ul>
        </div>
      </div>

      {/* Tercera parte del footer */}
      <div className="footer__section footer__section--tertiary">
        <p className="footer__copyright">© 2025 Tu Empresa. Todos los derechos reservados.</p>
        <div className="footer__payment-icons">
          <img src="" alt="Método de pago 1" className="footer__payment-icon" />
          <img src="" alt="Método de pago 2" className="footer__payment-icon" />
          <img src="" alt="Método de pago 3" className="footer__payment-icon" />
          <img src="" alt="Método de pago 4" className="footer__payment-icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;