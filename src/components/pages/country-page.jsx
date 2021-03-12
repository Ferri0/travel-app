import React from 'react';
import Header from '../header';
import CountryPageDitails from '../containers/country-page-details'
import Footer from '../footer';
import AuthPage from '../auth-page';

function CountryPage() {
  return (
    <div>
      <Header />
        <CountryPageDitails />
        <AuthPage />
      <Footer />
    </div>
  );
}

export {CountryPage};
