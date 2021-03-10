const showplaceRequested = () => ({
  type: 'FETCH_SHOWPLACE_REQUEST'
});

const showplaceLoaded = (showplaces) => ({
  type: 'FETCH_SHOWPLACE_SUCCESS',
  payload: showplaces
});

const showplaceFetchError = (error) => ({
  type: 'FETCH_SHOWPLACE_FAILURE',
  payload: error
});

const fetchShowplace = (dispatch) => async (showplaceService) => {
  dispatch(showplaceRequested());
  try {
    const data = await showplaceService.getAllCountries();
    await dispatch(showplaceLoaded(data))
  } catch (error) {
    dispatch(showplaceFetchError(error))
  }
}

export {
  fetchShowplace
};
