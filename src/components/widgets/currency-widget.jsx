import React from 'react';
import PropTyps from 'prop-types';

const CurrnecyWidget = ({currency: {currencyList}}) => {

  const currencyInfo = {
    text: {
      en: 'Local currency rate',
      ru: 'Крус местной валюты',
      ua: 'Курс місцевої валюти'
    },
    currency: 'EUR'
  };

  const valuta = currencyList[currencyInfo.currency].toFixed(2);

  return (
    <div className="widget-currency-point" >
      <p className="currency__paragraph">{currencyInfo.text.ru}</p>
      <span>{valuta}</span>
      <ul className="f32 currency__flag" >
        <li className="flag it" />
      </ul>
  </div>
  )
};

CurrnecyWidget.propTypes = {
  currency: PropTyps.objectOf(PropTyps.any).isRequired
}

export { CurrnecyWidget };
