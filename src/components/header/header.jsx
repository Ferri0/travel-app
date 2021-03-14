import React from 'react';
import HeaderAuthBlock from '../header-auth-block';
import style from './header.module.scss';

function Header() {
  return (
    <div className={style.header}>
      Logo
      <input
        type="search"
        className={style.searchInput}
        placeholder="search country"
      />
      <HeaderAuthBlock />
      Localization
    </div>
  );
}

export default Header;
