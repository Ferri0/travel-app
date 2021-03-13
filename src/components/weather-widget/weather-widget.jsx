import React, { useContext, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types'
import { Context } from '../showplace-service-context';
import { fetchWeather } from '../../action';
import { Spinner } from '../spinner'
import { ErrorIndicator } from '../error-indicator';

import './weather-widget.scss'

const WeatherWidget = () => {
  const showplaceService = useContext(Context);
  const { country } = useParams();
  const { showplacesList, weatherData } = useSelector(state => state);
  const dispatch = useDispatch();
  const { lang } = showplacesList;
  const currentCounrty = showplacesList.showplaces.find(({name_lang: nameLang}) => nameLang[lang].toLowerCase() === country.toLowerCase());
  const { name } = currentCounrty;
  const { weather, loading, error } = weatherData;

  console.log(weatherData);

  useEffect(() => {
    fetchWeather(dispatch)(showplaceService, name);
  }, [showplaceService, dispatch, name])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <ViewWeatherWidget 
    lang={lang}
    currentCounrty={currentCounrty} 
    weather={weather}
    />
};

const ViewWeatherWidget = ({lang, currentCounrty, weather}) => {
  const { name_lang: nameLang } = currentCounrty;

  return (
    <div className="widget"> 
      <div className="left-panel panel">
          <div className="city">
              {nameLang[lang]}
          </div>
          <div className="temp">
            <i className="owf owf-200 owf-2x" />
            <span className="degrees">{weather.main.temp.toFixed(0)}&deg;</span>
          </div>
          <div className="decription">
          <cite>{weather.weather.description}</cite>
      </div>
      </div>

      <div className="right-panel panel">
          <img src="https://s5.postimg.cc/lifnombwz/mumbai1.png" alt="icon" width="160" />
      </div>
    </div>
  )
};

ViewWeatherWidget.propTypes = {
  lang: PropTypes.string.isRequired,
  currentCounrty: PropTypes.objectOf(PropTypes.any).isRequired,
  weather: PropTypes.objectOf(PropTypes.any).isRequired
}

export {
  WeatherWidget
};
