import React from 'react';
import PropTypes from 'prop-types';
import './blockTwo.scss';

export default function BlockTwo({ text }) {
  return (
    <div className="block-two">
      <span className="block-two__text">{text}</span>
    </div>
  );
}

BlockTwo.propTypes = {
  text: PropTypes.string.isRequired,
};
