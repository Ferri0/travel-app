import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './main-page-content.module.scss';
import { Spinner } from '../../spinner';
import { Context } from '../../showplace-service-context';
import { fetchShowplace } from '../../../action';
import { ErrorIndicator } from '../../error-indicator';

function getCountry(data) {
  return data.map((item) =>
    Object.keys(item).map((country) => (
      <Link
        key={`${country}-card`}
        className={style.card}
        to={{
          pathname: '/country',
          propsCountry: country,
          propsAttractions: item[country],
        }}
      >
        {country}
      </Link>
    ))
  );
}

function MainPageContent(props) {
  const showplaceService = useContext(Context);
  const { showplaces, loading, error, fetchShowplaces } = props;
  useEffect(() => {
    fetchShowplaces(showplaceService);
  }, [showplaceService, fetchShowplaces]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <div className={style.wrapper}>{getCountry(showplaces)}</div>;
}

MainPageContent.propTypes = {
  showplaces: PropTypes.arrayOf(PropTypes.object),
  fetchShowplaces: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

MainPageContent.defaultProps = {
  showplaces: PropTypes.objectOf(),
  fetchShowplaces: PropTypes.func,
  error: PropTypes.array,
};

const mapStateToProps = ({
  showplacesList: { showplaces, error, loading },
}) => ({ showplaces, loading, error });

const mapDispatchToProps = (dispatch) => ({
  fetchShowplaces: fetchShowplace(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContent);
