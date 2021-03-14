import React from 'react';
import Header from '../header';
import { MainPageDetails } from '../containers'
import Footer from '../footer';
import AuthPage from '../auth-page';

function MainPage() {
  return (
    <div>
      <Header />
        <MainPageDetails />
        <AuthPage />
      <Footer />
    </div>
  );
}

export {MainPage};
