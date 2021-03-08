import React from 'react';
import style from './footer.module.scss';

function Footer() {
  return (
    <div className={style.footer}>
      2021
      <a href="https://github.com/Ferri0" target="blank">
        Yaroslav Abrasimov
      </a>
      <a href="https://github.com/DenisOleksiuk" target="blank">
        Denis Oleksiuk
      </a>
      <a href="https://github.com/kattitova" target="blank">
        Kateryna Tytova
      </a>
      <a href="https://github.com/IgorAleks88" target="blank">
        Igor Alekseyenko
      </a>
      RSS Logo
    </div>
  );
}

export default Footer;
