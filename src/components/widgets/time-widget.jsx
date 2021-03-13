import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './widgets.scss';

const TimeWidget = ({ lang }) => {
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };
  const dateFormatter = new Intl.DateTimeFormat(lang, dateOptions);
  const timeFormatter = new Intl.DateTimeFormat(lang, timeOptions)
  const time = timeFormatter.format(new Date());
  const [timer, setTimer] = useState(timeFormatter.format(new Date()));
  const timerId = setTimeout(() => {
    setTimer(timeFormatter.format(new Date()))
  }, 1000);
  useEffect(() => () => {
    clearTimeout(timerId);
  }, [timerId]);

  return (
    <div className="widget-date-point">
      <time className="widget__date" dateTime="2021" >{dateFormatter.format(new Date())}</time>
      <time className="widget__time" dateTime={timer} >{timer}</time>
    </div>
  )
};

TimeWidget.propTypes = {
  lang: PropTypes.string.isRequired
}

export {
  TimeWidget
};
