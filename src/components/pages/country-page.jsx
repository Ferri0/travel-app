import React from 'react';
import Header from '../header';
import CountryPageDitails from '../containers/country-page-details';
import Footer from '../footer';
import style from './country-page.module.scss';

function CountryPage() {
  return (
    <div className={style.countryPageWrapper}>
      <Header parrent="countryPage" />
      <CountryPageDitails />
      <Footer />
    </div>
  );
}

export { CountryPage };
