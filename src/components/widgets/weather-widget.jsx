import React from 'react';
import PropTypes from 'prop-types'

const WeatherWidget = ({ nameLang, lang, weather }) => (
    <div className="widget-weather-pint">
    <div className="city">
        {nameLang[lang]}
    </div>
    <div className="temp">
      <i className="owf owf-200 owf-2x" />
      <span className="degrees">{Math.round(weather.main.temp)}&deg;</span>
    </div>
    <div className="decription">
      <cite>{weather.weather.description}</cite>
    </div>
</div>
  );

WeatherWidget.propTypes = {
  nameLang: PropTypes.objectOf(PropTypes.string).isRequired,
  lang: PropTypes.string.isRequired,
  weather: PropTypes.objectOf(PropTypes.any).isRequired
}

export {
  WeatherWidget
};
