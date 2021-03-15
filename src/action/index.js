const showplaceRequested = () => ({
  type: 'FETCH_SHOWPLACE_REQUEST',
});

const showplaceLoaded = (showplaces) => ({
  type: 'FETCH_SHOWPLACE_SUCCESS',
  payload: showplaces,
});

const showplaceFetchError = (error) => ({
  type: 'FETCH_SHOWPLACE_FAILURE',
  payload: error,
});

const fetchShowplace = (dispatch) => async (showplaceService) => {
  dispatch(showplaceRequested());
  try {
    const data = await showplaceService.getAllCountries();
    await dispatch(showplaceLoaded(data));
  } catch (error) {
    dispatch(showplaceFetchError(error));
  }
};

const setShowAuth = (value) => ({
  type: 'SET_SHOW_AUTH',
  payload: value,
});

const setAuthorized = (value) => ({
  type: 'SET_AUTHORIZED',
  payload: value,
});

const setCurrentUser = (value) => ({
  type: 'SET_CURRENT_USER',
  payload: value,
});

const setLanguage = (value) => ({
  type: 'SET_LANG',
  payload: value,
});

export {
  fetchShowplace,
  setShowAuth,
  setAuthorized,
  setCurrentUser,
  setLanguage,
};
