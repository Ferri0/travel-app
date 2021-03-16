import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import ReactPlayer from 'react-player';
import { setShowAuth } from '../../action';
import { Widgets } from '../widgets';
import { Gallery } from './gallery';
import style from './country-list.module.scss';

const CountryList = (props) => {
  const { currentCounrty, lang,  } = props;
  const {
    name_lang: title,
    attraction,
    img: countryImg,
    capital,
    description: countryDesc,
    video,
  } = currentCounrty;
  const capitalTxt = {
    ua: 'Столиця',
    en: 'Capital',
    ru: 'Столица',
  };

  return (
    <div className={style.countryContent}>
      <div
        className={style.countryDescription}
        style={{ background: `url("${countryImg}")` }}
      >
        <h2 className={style.countryTitle}>{title[lang]}</h2>
        {/* <div
          className={style.countryImg}
          style={{ background: `url("${countryImg}")` }}
        /> */}
        <div className={style.countryText}>
          <span
            className={style.countryCapital}
          >{`${capitalTxt[lang]}: ${capital[lang]}`}</span>
          <span>{countryDesc[lang]}</span>
        </div>
        <div className={style.widgetsBlock}>
          <Widgets />
        </div>
      </div>
      <div className={style.video}>
        <ReactPlayer url={video} />
      </div>
      <Gallery attraction={attraction} lang={lang} />

      {/* <ul className="countri__list">
        {attraction.map(({ name, img, description, id, rate }, index) => (
          <li key={id}>
            <div>
              <b>{name[lang]}</b>
            </div>
            <img width="250px" src={img} alt={name} />
            <div className="rating-buttons-wrapper">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={`${_id}${i}`}
                  onClick={() => {
                    if (currentUser) {
                      showplaceService.rate(_id, index, currentUser, i);
                    } else {
                      setShowAuthAction(true);
                    }
                  }}
                  type="button"
                >
                  {i}
                </button>
              ))}
            </div>
            <div className="rating-marks-wrapper">
              {rate.map((mark, i) => (
                <span key={i}>{`${mark.user}: ${mark.rating}`}</span>
              ))}
            </div>
            <div>
              <em>{description[lang]}</em>
            </div>
          </li>
        ))}
      </ul> */}
=======
import { Widgets } from '../widgets';
import RatingPage from '../rating-page';

import './country-list.scss';

const CountryList = (props) => {
  const { currentCounrty, lang } = props;
  const { name_lang: title, attraction, img: catipalImg  } = currentCounrty;
    
  return (
    <div>
      <h2 className="countri__title">{ title[lang] }</h2>
      <img className="country__img" src={catipalImg} alt="capital-img"/>
      <Widgets />
      <ul className="countri__list">
        {
          attraction.map(({ name, img, description, id, rate}, index) => (
              <li key={id}>
                <div><b>{name[lang]}</b></div>
                <img width="250px" src={img} alt={name}/>
                <RatingPage rate={rate} index={index} currentCounrty={currentCounrty}/>
                <div><em>{description[lang]}</em></div>
              </li>
          ))
        }
      </ul>
>>>>>>> 6049b91... refactor rating to a different component
    </div>
  );
};

CountryList.propTypes = {
  currentCounrty: PropTypes.objectOf(PropTypes.any).isRequired,
<<<<<<< HEAD
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = ({ showplacesList: { currentUser } }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setShowAuthAction: (value) => dispatch(setShowAuth(value)), // [1]
  fetchShowplaceAction: fetchShowplace(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
=======
  lang: PropTypes.string.isRequired
}


export default CountryList;

>>>>>>> 6049b91... refactor rating to a different component
