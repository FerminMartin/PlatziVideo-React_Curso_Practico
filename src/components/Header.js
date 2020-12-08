import React from 'react';

const Header = () => (
  <header claasName="header">
      <img claasName="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video" />
      <div claasName="header__menu">
        <div claasName="header__menu--profile">
          <img src="../assets/user-icon.png" alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href="/">Cuenta</a></li>
          <li><a href="/">Cerrar Sesión</a></li>
        </ul>
      </div>
  </header>
);

export default Header;