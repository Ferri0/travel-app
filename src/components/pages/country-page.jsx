import React from 'react';
import Header from '../header';
import CountryPageDitails from '../containers/country-page-details'
import Footer from '../footer';

function CountryPage() {
  return (
    <div>
      <Header />
        <CountryPageDitails />
      <Footer />
    </div>
  );
}

export {CountryPage};
