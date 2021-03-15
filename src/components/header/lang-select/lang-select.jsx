import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Context } from '../../showplace-service-context';
import { fetchShowplace, setLanguage } from '../../../action';
import style from './lang-select.module.scss';

function LangSelect(props) {
  const showplaceService = useContext(Context);
  const { lang, fetchShowplaces, setLang } = props;

  useEffect(() => {
    fetchShowplaces(showplaceService);
  }, [showplaceService, fetchShowplaces]);

  useEffect(() => {
    if (localStorage.getItem('travel-app-lang') !== null) {
      setLang(localStorage.getItem('travel-app-lang'));
    }
  }, []);

  function handleChange(e) {
    setLang(e.target.value);
    localStorage.setItem('travel-app-lang', e.target.value);
  }

  return (
    <select
      className={style.langSelect}
      onChange={(e) => handleChange(e)}
      value={lang}
    >
      <option value="ua">Українська</option>
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
}

LangSelect.propTypes = {
  fetchShowplaces: PropTypes.func,
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func,
};

LangSelect.defaultProps = {
  fetchShowplaces: PropTypes.func,
  setLang: PropTypes.func,
};

const mapStateToProps = ({ showplacesList: { showplaces, lang } }) => ({
  showplaces,
  lang,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShowplaces: fetchShowplace(dispatch),
  setLang: (value) => dispatch(setLanguage(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LangSelect);
