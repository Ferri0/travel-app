import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './country-page-content.module.scss';
import ShowplaceService from '../../../services';
import Element from '../../block-one';

function CountryPageContent() {
  const location = useLocation();
  const country = location.propsCountry;

  const showplacesService = new ShowplaceService();
  const [data, setData] = useState([]);
  useEffect(() => {
    showplacesService.getCountry(country).then((res) => setData(res));
  }, []);

  return (
    <div className={style.wrapper}>
      <Link to="/">Back to Main Page</Link>
      <div>{country}</div>
      <div>
        <Element data={data} />
      </div>
    </div>
  );
}

export default CountryPageContent;
