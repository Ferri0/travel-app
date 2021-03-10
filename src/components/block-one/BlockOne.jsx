import React from 'react';
import PropTypes from 'prop-types';
import style from './BlockOne.module.scss';

const Element =  (props) => {
  const { showplaces } = props;
  return (
    <div className={style.blockOne}>
      {
        showplaces.map(({img, title, description, id}) => {
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
  showplaces: PropTypes.arrayOf(PropTypes.object)
};

Element.defaultProps = {
  showplaces: PropTypes.array
};

export { Element };
