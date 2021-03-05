import React from 'react';
import ReactDOM from 'react-dom';
import './scss/base/normalize.scss';
import './scss/base/base.scss';
import BlockOne from './components/block-one';
import BlockTwo from './components/block-two';

const child = <BlockTwo text="Hello there!!!" />;
ReactDOM.render(
  <BlockOne childElem={child} />,
  document.getElementById('root')
);
