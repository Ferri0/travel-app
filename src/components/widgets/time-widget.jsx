import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './widgets.scss';

const updateTime = (UTC) => {
  const differenceTime = (new Date().getTimezoneOffset() / 60) + UTC;
  const date = new Date();
  date.setHours(date.getHours() + differenceTime);
  return date;
};

const TimeWidget = ({ lang, UTC }) => {
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };
  const dateFormatter = new Intl.DateTimeFormat(lang, dateOptions);
  const timeFormatter = new Intl.DateTimeFormat(lang, timeOptions);
  
  const [time, setTime] = useState(timeFormatter.format(updateTime(UTC)));
  
  const timerId = setTimeout(() => {
    setTime(timeFormatter.format(updateTime(UTC)));
  }, 1000);

  useEffect(() => () => {
    clearTimeout(timerId);
  }, [timerId]);

  return (
    <div className="widget-date-point">
      <time className="widget__date" dateTime="2021" >{dateFormatter.format(new Date())}</time>
      <time className="widget__time" dateTime={time} >{time}</time>
    </div>
  )
};

TimeWidget.propTypes = {
  lang: PropTypes.string.isRequired,
  UTC: PropTypes.number.isRequired
}

export {
  TimeWidget
};
