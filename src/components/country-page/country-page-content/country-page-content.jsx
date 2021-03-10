import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './country-page-content.module.scss';

function CountryPageContent() {
  const location = useLocation();
  const country = location.propsCountry;
  // const attractions = location.propsAttractions;
  console.log(country);
  return (
    <div className={style.wrapper}>
      <Link to="/">Back to Main Page</Link>
      <div className={style.countryTitle}>{country}</div>
    </div>
  );
}

export default CountryPageContent;
