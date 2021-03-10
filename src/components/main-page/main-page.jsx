import React from 'react';
import style from './main-page.module.scss';
import Header from '../header';
import MainPageContent from './main-page-content';
import Footer from '../footer';

function MainPage() {
  return (
    <div className={style.wrapper}>
      <Header />
      <MainPageContent />
      <Footer />
    </div>
  );
}

export default MainPage;
