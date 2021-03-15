import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderAuthBlock from '../header-auth-block';
import style from './header.module.scss';
import { Search } from './search';

function Header({ parrent }) {
  return (
    <div className={style.header}>
      <Link to="/" className={style.logo} />
      <Search parrent={parrent} />
<<<<<<< HEAD
=======
      <HeaderAuthBlock />
>>>>>>> c4b56ae... fix: add main and country detailes
      Localization
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
