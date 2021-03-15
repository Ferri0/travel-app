import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Context } from '../../showplace-service-context';
import { fetchShowplace } from '../../../action';
import style from './search.module.scss';

function Search(props) {
  const showplaceService = useContext(Context);
  const { lang, fetchShowplaces, parrent } = props;

  useEffect(() => {
    fetchShowplaces(showplaceService);
  }, [showplaceService, fetchShowplaces]);

  const inputRef = useRef(null);
  const placeholder = {
    ua: 'пошук країни',
    en: 'search country',
    ru: 'поиск страны',
  };

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

  if (parrent === 'countryPage') return false;
  return (
    <div>
      <input
        ref={inputRef}
        type="search"
        className={style.searchInput}
        placeholder={placeholder[lang]}
        results={0}
      />
      <button type="button" className={style.searchButton}>
        <i className="fas fa-search" />
      </button>
    </div>
  );
}

Search.propTypes = {
  parrent: PropTypes.string,
  fetchShowplaces: PropTypes.func,
  lang: PropTypes.string.isRequired,
};

Search.defaultProps = {
  parrent: null,
  fetchShowplaces: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  fetchShowplaces: fetchShowplace(dispatch),
});

const mapStateToProps = ({ showplacesList: { showplaces, lang } }) => ({
  showplaces,
  lang,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
