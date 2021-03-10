import React from 'react';
import style from './header.module.scss';

function Header() {
  return (
    <div className={style.header}>
      Logo
      <input
        type="text"
        className={style.searchInput}
        placeholder="search country"
      />
      Localization
    </div>
  );
}

export default Header;
