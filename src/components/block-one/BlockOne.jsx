import React from 'react';
import PropTypes from 'prop-types';
import style from './BlockOne.module.scss';

const Element =  ({data}) => {
  if (!data) {
    return <div>loading</div>
  }

  return (
    <div className={style.blockOne}>
      {
        data.map(({img, title, description, id}) => {
          const res = (
            <div key={id}>
              <div className="block-two__text">{title}</div>
              <img className={style.img} src={img} alt="img"/>
              <div>{description}</div>
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
