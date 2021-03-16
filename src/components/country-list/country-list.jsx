import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ShowplaceService} from '../../services';
import {setShowAuth, fetchShowplace} from '../../action';
import { Widgets } from '../widgets'

import './country-list.scss';

const showplaceService = new ShowplaceService;

const CountryList = (props) => {
  const { currentUser, currentCounrty, lang, setShowAuthAction, fetchShowplaceAction } = props;
  const { name_lang: title, attraction, img: catipalImg  } = currentCounrty;
  const { _id } = currentCounrty;
  
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
                <div className = "rating-buttons-wrapper">
                {[1,2,3,4,5].map((i) => (
                    <button key = {`${_id}${i}`}
                    onClick = {() => {
                      if (currentUser) {
                      showplaceService.rate(_id, index, currentUser, i).then(() => { 
                        fetchShowplaceAction(showplaceService);
                      });
                      } else {
                        setShowAuthAction(true);
                      }
                    }}
                    type="button">{i}</button>
                  ))}
                </div>
                <div className = "rating-marks-wrapper">
                  {rate.map((mark) => (
                    <span>{`${mark.user}: ${mark.rating}`}</span>
          ))}
                </div>
                <div><em>{description[lang]}</em></div>
              </li>
          ))
        }
      </ul>
    </div>
  )
}

CountryList.propTypes = {
  currentCounrty: PropTypes.objectOf(PropTypes.any).isRequired,
  lang: PropTypes.string.isRequired,
  currentUser:PropTypes.string,
  setShowAuthAction: PropTypes.func.isRequired

}

CountryList.defaultProps = {
  currentUser: null
}

const mapStateToProps = ({
  showplacesList: { currentUser },
}) => ({ currentUser });

const mapDispatchToProps = (dispatch) => ({
  setShowAuthAction: (value) => dispatch(setShowAuth(value)), // [1]
  fetchShowplaceAction: fetchShowplace(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);

