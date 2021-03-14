import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './slider.module.scss';
import { VControl } from './v-control';
import { TextBlock } from './text-block';
import { SliderBlock } from './slider-block';

function getInitClasses(data) {
  const arr = [];
  data.forEach((_item, i) => {
    if (i === 0) arr.push('active');
    else arr.push('no-active');
  });
  return arr;
}

function generateMainImgs(data, cls) {
  return data.map((item, i) => (
    <div
      key={`${data[i].title}-main-img`}
      className={`${style.mainImg} ${style[cls[i]]}`}
      style={{ background: `url("${data[i].img}")` }}
    />
  ));
}

function changeClasses(ind, cls) {
  const arr = [...cls];
  arr.forEach((item, i) => {
    if (i === ind) arr[i] = 'active';
    else arr[i] = 'no-active';
  });
  return arr;
}

function generateSliderData(arr, lang) {
  const data = [];
  arr.forEach((country) => {
    const obj = {
      title: country.name_lang[lang],
      subtitle: country.capital[lang],
      text: country.description[lang],
      img: country.img,
      miniature: country.attraction[0].img,
      attractions: country.attraction,
    };
    data.push(obj);
  });
  return data;
}

function Slider({ showplaces, lang }) {
  const data = generateSliderData(showplaces, lang);

  const [activeInd, setActiveInd] = useState(0);
  const [slideClasses, setSlideClasses] = useState(getInitClasses(data));

  const changeSlide = (i) => {
    const maxInd = slideClasses.length;
    let ind = activeInd + i;
    if (ind < 0) ind = maxInd - 1;
    if (ind === maxInd) ind = 0;
    setActiveInd(ind);
    setSlideClasses(changeClasses(ind, slideClasses));
  };

  const selectCountry = (i) => {
    setActiveInd(i);
    setSlideClasses(changeClasses(i, slideClasses));
  };

  return (
    <div className={style.slider}>
      {generateMainImgs(data, slideClasses)}
      <div className={style.overlay} />
      <VControl
        data={data}
        ind={activeInd}
        slideClasses={slideClasses}
        selectCountry={selectCountry}
      />
      <TextBlock data={data} ind={activeInd} slideClasses={slideClasses} />
      <SliderBlock
        data={data}
        changeSlide={changeSlide}
        slideClasses={slideClasses}
        ind={activeInd}
      />
    </div>
  );
}

export { Slider };

Slider.propTypes = {
  showplaces: PropTypes.arrayOf(PropTypes.any),
  lang: PropTypes.string,
};

Slider.defaultProps = {
  showplaces: null,
  lang: null,
};
