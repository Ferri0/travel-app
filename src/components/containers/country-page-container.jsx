import React from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './country-page-content.module.scss';

function CountryPageContainer({showplaces, lang}) {
  const location = useLocation();
  const countryPath = location.propsCountry;
  const currentCounrty = showplaces.find((item) => item.name_lang[lang].toLowerCase() === countryPath);
  const { attraction } = currentCounrty;
  return (
    <div className={style.wrapper}>
      <Link to="/">Back to Main Page</Link>
      <div className={style.countryTitle}>{countryPath}</div>
      <img width="250px" src={currentCounrty.img} alt=""/>
      <div style={{display: 'flex'}} className="wrapper">
        {
          attraction.map(({ name, img, description, id}) => (
              <div key={id}>
                <div><b>{name[lang]}</b></div>
                <img width="250px" src={img} alt={name}/>
                <em>{description[lang]}</em>
              </div>
          ))
        }
      </div>
    </div>
  );
}

CountryPageContainer.propTypes = {
  showplaces: PropTypes.arrayOf(PropTypes.object).isRequired,
  lang: PropTypes.string.isRequired
}

const mapStateToProps = ({showplacesList: {showplaces, lang}}) => ({ showplaces, lang })

export default connect(mapStateToProps)(CountryPageContainer);
