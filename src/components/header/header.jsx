import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderAuthBlock from '../header-auth-block';
import style from './header.module.scss';
import { Search } from './search';
import { LangSelect } from './lang-select';
import { BurgerIcon } from './burger-icon';

function Header({ parrent }) {
  const [menu, setMenu] = useState('close');
  const clickBurgerMenu = () => {
    if (menu === 'close') return setMenu('open');
    return setMenu('close');
  };

  return (
    <div className={style.header}>
      <Link to="/" className={style.logo} />
      <div className={`${style.menu} ${style[menu]}`}>
        <Search parrent={parrent} />
        <HeaderAuthBlock />
        <LangSelect />
      </div>
      <BurgerIcon clickBurgerMenu={clickBurgerMenu} cls={menu} />
    </div>
  );
}

export default Header;

Header.propTypes = {
  parrent: PropTypes.string,
};

Header.defaultProps = {
  parrent: null,
};
