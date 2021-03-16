import React from 'react';
import PropTypes from 'prop-types';
import { Widgets } from '../widgets';
import RatingPage from '../rating-page';

import './country-list.scss';

const CountryList = (props) => {
  const { currentCounrty, lang } = props;
  const { name_lang: title, attraction, img: catipalImg  } = currentCounrty;
    
  return (
    <div>
      <h2 className="countri__title">{ title[lang] }</h2>
      <img className="country__img" src={catipalImg} alt="capital-img"/>
      <Widgets />
      <ul className="countri__list">
        {
          attraction.map(({ name, img, description, id, rate}, index) => (
              <li key={id}>
                <div><b>{name[lang]}</b></div>
                <img width="250px" src={img} alt={name}/>
                <RatingPage rate={rate} index={index} currentCounrty={currentCounrty}/>
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


export default CountryList;

