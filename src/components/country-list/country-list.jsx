import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ShowplaceService} from '../../services';

import './country-list.scss';

const showplaceService = new ShowplaceService;

const CountryList = (props) => {
  const { currentUser, currentCounrty, lang } = props;
  const { name_lang: title, attraction } = currentCounrty;
  const { _id } = currentCounrty;
  

  return (
    <div>
      <h2 className="countri__title">{ title[lang] }</h2>
      <ul className="countri__list">
        {
          attraction.map(({ name, img, description, id}, index) => (
              <li key={id}>
                <div><b>{name[lang]}</b></div>
                <img width="250px" src={img} alt={name}/>
                <div className = "rating-buttons-wrapper">
                {[1,2,3,4,5].map((i) => (
                    <button key = {`${_id}${i}`}
                    onClick = {() => {
                      if (currentUser) {
                      showplaceService.rate(_id, index, currentUser, i);
                      }
                    }}
                    type="button">{i}</button>
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
  currentUser:PropTypes.string

}

const mapStateToProps = ({
  showplacesList: { currentUser },
}) => ({ currentUser });

export default connect(mapStateToProps)(CountryList);

