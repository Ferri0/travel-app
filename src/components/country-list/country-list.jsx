import React from 'react';
import PropTypes from 'prop-types';

import './country-list.scss'

const CountryList = ({currentCounrty, lang}) => {
  const { name_lang: title, attraction } = currentCounrty;

  return (
    <div>
      <h2 className="countri__title">{ title[lang] }</h2>
      <ul className="countri__list">
        {
          attraction.map(({ name, img, description, id}) => (
              <li key={id}>
                <div><b>{name[lang]}</b></div>
                <img width="250px" src={img} alt={name}/>
                <div><em>{description[lang]}</em></div>
              </li>
          ))
        }
      </ul>
    </div>
  )
}

CountryList.propTypes = {
  currentCounrty: PropTypes.objectOf(PropTypes.any).isRequired,
  lang: PropTypes.string.isRequired
}

export {
  CountryList
};
