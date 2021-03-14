import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainPageList = ({ showplace, lang }) => {
  const { name_lang: name, img } = showplace;

  return (
    <Link to={name[lang]}>
      <div>{name[lang]}</div>
      <img height="200" src={img} alt="" />
    </Link>
  );
};

MainPageList.propTypes = {
  showplace: PropTypes.objectOf(PropTypes.any).isRequired,
  lang: PropTypes.string.isRequired,
};

export { MainPageList };
