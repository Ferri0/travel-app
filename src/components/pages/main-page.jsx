import React from 'react';
import Header from '../header';
import { MainPageDetails } from '../containers';
import Footer from '../footer';
import style from './main-page.module.scss';

function MainPage() {
  return (
    <div className={style.mainPageWrapper}>
      <Header />
      <MainPageDetails />
      <Footer />
    </div>
  );
}

export { MainPage };
