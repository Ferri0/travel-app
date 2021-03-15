import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './search.module.scss';

function Search({ parrent }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  if (parrent === 'countryPage') return false;
  return (
    <div>
      <input
        ref={inputRef}
        type="search"
        className={style.searchInput}
        placeholder="search country"
        results={0}
      />
      <button type="button" className={style.searchButton}>
        <i className="fas fa-search" />
      </button>
    </div>
  );
}

export { Search };

Search.propTypes = {
  parrent: PropTypes.string,
};

Search.defaultProps = {
  parrent: null,
};
