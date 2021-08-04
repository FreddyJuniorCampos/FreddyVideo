import React from 'react';
import '../assets/styles/components/Footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <div className="row justify-content-between">
        <div className="col-9">
          <a href="/">Terminos de uso</a>
          <a href="/">Declaración de privacidad</a>
          <a href="/">Centro de ayuda</a>
        </div>
        <div className="footer__col col-3">
          <a href="https://github.com/FreddyJuniorCampos">Hecho por: Freddy Campos</a>
        </div>
      </div>
    </div>
    
    
  </footer>
);

export default Footer;