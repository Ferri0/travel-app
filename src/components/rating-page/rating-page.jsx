import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setShowAuth, fetchShowplace } from '../../action';
import { ShowplaceService } from '../../services';
import style from './rating-page.module.scss';

const showplaceService = new ShowplaceService();

const RatingPage = (props) => {
  const {
    currentUser,
    currentCounrty,
    setShowAuthAction,
    fetchShowplaceAction,
    index,
    rate,
    lang,
  } = props;
  const { _id } = currentCounrty;
  const ratingLabel = {
    ua: 'Рейтинг',
    en: 'Rating',
    ru: 'Рейтинг',
  };
  const ratingAll = {
    ua: 'Весь рейтинг',
    en: 'All Rating',
    ru: 'Весь рейтинг',
  };
  const ratingAllText = {
    ua: "Цю пам'ятку ще жодного разу не оцінили. Зробіть це прямо зараз!",
    en: 'This attraction has never been rated yet. Do it now!',
    ru:
      'Эту достопримечательность еще ни разу не оценили. Сделайте это прямо сейчас!)',
  };
  const [marksClass, setMarksClass] = useState('hidden');

  const getAllRating = () => {
    if (rate.length !== 0) {
      return rate.map(({ _id: id, user, rating }) => (
        <span key={id}>{`${user}: ${rating}`}</span>
      ));
    }
    return <span>{ratingAllText[lang]}</span>;
  };

  return (
    <div className={style.ratingWrapper}>
      <span className={style.ratingTitle}>{ratingLabel[lang]}</span>
      <div className={style.ratingButtonWrapper}>
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={`${_id}${i}`}
            className={style.ratingButton}
            onClick={() => {
              if (currentUser) {
                showplaceService.rate(_id, index, currentUser, i).then(() => {
                  fetchShowplaceAction(showplaceService);
                });
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
      <button
        type="button"
        className={style.ratingTitle}
        onClick={() => {
          setMarksClass('');
        }}
      >
        {ratingAll[lang]}
      </button>
      <div className={`${style.ratingMarksWrapper} ${style[marksClass]}`}>
        <div className={style.ratingMarksContainer}>
          {getAllRating()}
          <button
            type="button"
            className={style.closeButton}
            onClick={() => setMarksClass('hidden')}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    </div>
  );
};

RatingPage.propTypes = {
  currentCounrty: PropTypes.objectOf(PropTypes.any).isRequired,
  currentUser: PropTypes.string,
  setShowAuthAction: PropTypes.func.isRequired,
  fetchShowplaceAction: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  rate: PropTypes.arrayOf(PropTypes.any).isRequired,
  lang: PropTypes.string.isRequired,
};

RatingPage.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ showplacesList: { currentUser } }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setShowAuthAction: (value) => dispatch(setShowAuth(value)), // [1]
  fetchShowplaceAction: fetchShowplace(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingPage);
