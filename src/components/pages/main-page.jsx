import React from 'react';
import Header from '../header';
import { MainPageContainer } from '../containers';
import Footer from '../footer';

function MainPage() {
  return (
    <div>
      <Header />
      <MainPageContainer />
      <Footer />
    </div>
  );
}

export {MainPage};
