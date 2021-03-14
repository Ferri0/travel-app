import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderAuthBlock from '../header-auth-block';
import style from './header.module.scss';

function getSearch(parrent) {
  if (parrent === 'countryPage') return false;
  return (
    <input
      type="search"
      className={style.searchInput}
      placeholder="search country"
    />
  );
}

function Header({ parrent }) {
  return (
    <div className={style.header}>
      <Link to="/" className={style.logo} />
      {getSearch(parrent)}
      <HeaderAuthBlock />
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
