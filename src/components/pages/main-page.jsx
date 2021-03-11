import React from 'react';
import Header from '../header';
import { MainPageDetails } from '../containers'
import Footer from '../footer';

function MainPage() {
  return (
    <div>
      <Header />
        <MainPageDetails />
      <Footer />
    </div>
  );
}

export {MainPage};
