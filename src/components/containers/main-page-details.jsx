import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from '../spinner';
import { Context } from '../showplace-service-context';
import { fetchShowplace } from '../../action';
import { ErrorIndicator } from '../error-indicator';
import { MainPageList } from '../main-page-list';

const MainPageDetails = (props) => {
  const showplaceService = useContext(Context);
  const { showplaces, loading, error, lang, fetchShowplaces } = props;

  useEffect(() => {
    fetchShowplaces(showplaceService);
  }, [showplaceService, fetchShowplaces]);

  if (loading) {
    return <Spinner />;
  }
  
  if (error) {
    return <ErrorIndicator />;
  }
  return (
    <ul>
        {
      showplaces.map((showplace) => {
        const {_id} = showplace;
        return (
          <li key={_id}>
          <MainPageList lang={lang} showplace={showplace} />
        </li>
        )
      })
    }
    </ul>
  )
}

MainPageDetails.propTypes = {
  showplaces: PropTypes.arrayOf(PropTypes.object),
  fetchShowplaces: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  lang: PropTypes.string.isRequired
};

MainPageDetails.defaultProps = {
  showplaces: PropTypes.objectOf(),
  fetchShowplaces: PropTypes.func,
  error: PropTypes.array,
};

const mapStateToProps = ({
  showplacesList: { showplaces, error, loading, lang },
}) => ({ showplaces, loading, error, lang });

const mapDispatchToProps = (dispatch) => ({
  fetchShowplaces: fetchShowplace(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageDetails);
