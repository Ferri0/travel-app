import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from '../spinner';
import { Context } from '../showplace-service-context';
import { fetchShowplace } from '../../action';
import { Element } from '../block-one';
import { ErrorIndicator } from '../error-indicator';

const ContainerElement = (props) => {
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

  const [cont1] = showplaces;
  const { england } = cont1;

  return <Element showplaces={england} />;
};

ContainerElement.propTypes = {
  showplaces: PropTypes.arrayOf(PropTypes.object),
  fetchShowplaces: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

ContainerElement.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ContainerElement);
