import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './country-page-content.module.scss';
import { Element } from '../../block-one';

function CountryPageContent() {
  const location = useLocation();
  const country = location.propsCountry;
  const attractions = location.propsAttractions;

  return (
    <div className={style.wrapper}>
      <Link to="/">Back to Main Page</Link>
      <div className={style.countryTitle}>{country}</div>
      <div>
        <Element showplaces={attractions} />
      </div>
    </div>
  );
}

export default CountryPageContent;
