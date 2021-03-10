import React from 'react';
import Header from '../header';
import { CountryPageContainer } from '../containers';
import Footer from '../footer';

function CountryPage() {
  return (
    <div>
      <Header />
      <CountryPageContainer />
      <Footer />
    </div>
  );
}

export {CountryPage};
