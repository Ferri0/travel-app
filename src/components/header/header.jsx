import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderAuthBlock from '../header-auth-block';
import style from './header.module.scss';
import { Search } from './search';

function Header({ parrent }) {
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  // function getSearch(cls) {
  //   if (cls === 'countryPage') return false;
  //   return (
  //     <div>
  //       <input
  //         ref={inputRef}
  //         type="search"
  //         className={style.searchInput}
  //         placeholder="search country"
  //         results={0}
  //       />
  //       <button type="button" className={style.searchButton}>
  //         <i className="fas fa-search" />
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className={style.header}>
      <Link to="/" className={style.logo} />
<<<<<<< HEAD
      <Search parrent={parrent} />
=======
      {getSearch(parrent)}
      <HeaderAuthBlock />
>>>>>>> de3901b4ef930c8a5299483afb7e25f645f118c9
      Localization
    </div>
  );
}

export default Header;

Header.propTypes = {
  parrent: PropTypes.string,
};

Header.defaultProps = {
  parrent: null,
};
