import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
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
      <Gallery
        attraction={attraction}
        lang={lang}
        currentCounrty={currentCounrty}
      />
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
    </div>
  );
};

CountryList.propTypes = {
  currentCounrty: PropTypes.objectOf(PropTypes.any).isRequired,
  lang: PropTypes.string.isRequired,
};
export default CountryList;
const mapStateToProps = ({ showplacesList: { currentUser } }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setShowAuthAction: (value) => dispatch(setShowAuth(value)), // [1]
  fetchShowplaceAction: fetchShowplace(dispatch)
});