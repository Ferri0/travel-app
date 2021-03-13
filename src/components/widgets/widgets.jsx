import React, { useContext, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types'
import { Context } from '../showplace-service-context';
import { fetchWeather } from '../../action';
import { Spinner } from '../spinner'
import { ErrorIndicator } from '../error-indicator';
import { WeatherWidget } from "./weather-widget";
import { TimeWidget } from './time-widget';

import './widgets.scss'

const Widgets = () => {
  const showplaceService = useContext(Context);
  const { country } = useParams();
  const { showplacesList, weatherData } = useSelector(state => state);
  const dispatch = useDispatch();
  const { lang } = showplacesList;
  const currentCounrty = showplacesList.showplaces.find(({name_lang: nameLang}) => nameLang[lang].toLowerCase() === country.toLowerCase());
  const { name } = currentCounrty;
  const { weather, loading, error } = weatherData;

  useEffect(() => {
    fetchWeather(dispatch)(showplaceService, name, lang);
  }, [showplaceService, dispatch, name, lang])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <ViewWidgetItems 
    lang={lang}
    currentCounrty={currentCounrty} 
    weather={weather}
    />
};

const ViewWidgetItems = ({lang, currentCounrty, weather}) => {
  const { name_lang: nameLang } = currentCounrty;

  return (
    <div className="widgets"> 
      <WeatherWidget lang={lang} nameLang={nameLang} weather={weather} />
      <TimeWidget lang={lang} />
    </div>
  )
};

ViewWidgetItems.propTypes = {
  lang: PropTypes.string.isRequired,
  currentCounrty: PropTypes.objectOf(PropTypes.any).isRequired,
  weather: PropTypes.objectOf(PropTypes.any).isRequired
}

export {
  Widgets
};
