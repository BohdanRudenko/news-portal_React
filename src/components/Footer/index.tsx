import React from 'react';

import './style.scss'


const Footer = () => {
  return (
    <footer className="mainFooter">
      <div>
        Новостник <div className='small'>Single Page Application</div>
      </div>
      <div className='small'>Дипломный проект</div>
      <div>
        <div className='small'>Made by</div>Bohdan Rudenko
      </div>
    </footer>
  );
}

export default Footer;