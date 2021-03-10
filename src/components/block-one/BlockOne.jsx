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
        data.map(({img, name, capital, description}) => {
          const res = (
            <div key={id}>
              <div className="block-two__text">{name}</div>
              <div className="block-two__text">{capital.ru}</div>
              <img className="img" src={img} alt="img"/>
              <div>{description.ru}</div>
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
