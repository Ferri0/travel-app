/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './BlockOne.module.scss';

const Element =  ({data}) => {
  if (!data) {
    return <div>loading</div>
  }

  return (
    <div className="block-two">
      {
        data.map(({img, name, description, name_lang}) => {
          const res = (
            <div key={name}>
              <div className="block-two__text">{name_lang.ru}</div>
              <img className="img" src={img} alt="img"/>
              <div className="block-two__text">{description.ru}</div>
            </div>
          )
          return res
        })
      }
    </div>
  );
};

Element.propTypes = {
  data: PropTypes.arrayOf().isRequired,
};

export default Element;
