import React from 'react';
import PropTypes from 'prop-types';
import style from './burger-icon.module.scss';

function BurgerIcon({ clickBurgerMenu, cls }) {
  return (
    <button
      type="button"
      className={`${style.burgerIcon} ${style[cls]}`}
      onClick={clickBurgerMenu}
    >
      <span />
      <span />
      <span />
      <span />
    </button>
  );
}

export { BurgerIcon };

BurgerIcon.propTypes = {
  clickBurgerMenu: PropTypes.func.isRequired,
  cls: PropTypes.string.isRequired,
};
