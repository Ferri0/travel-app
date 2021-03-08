import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './main-page-content.module.scss';
import ShowplaceService from '../../../services';

function getCountry(data) {
  return data.map((item) =>
    Object.keys(item).map((country) => (
      <Link
        key={`${country}-card`}
        className={style.card}
        to={{
          pathname: '/country',
          propsCountry: country,
        }}
      >
        {country}
      </Link>
    ))
  );
}

function MainPageContent() {
  const showplacesService = new ShowplaceService();
  const [data, setData] = useState([]);
  useEffect(() => {
    showplacesService.getAllCountries().then((res) => setData(res));
  }, []);

  return <div className={style.wrapper}>{getCountry(data)}</div>;
}

export default MainPageContent;
