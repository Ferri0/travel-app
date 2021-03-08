import React from 'react';
import style from './country-page.module.scss';
import Header from '../header';
import CountryPageContent from './country-page-content';
import Footer from '../footer';

function CountryPage() {
  return (
    <div className={style.wrapper}>
      <Header />
      <CountryPageContent />
      <Footer />
    </div>
  );
}

export default CountryPage;
