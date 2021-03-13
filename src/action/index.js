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

const weatherRequested = () => ({
  type: 'FETCH_WEATHER_REQUEST'
});

const weatherLoaded = (weather) => ({
  type: 'FETCH_WEATHER_SUCCESS',
  payload: weather
});

const weatherFetchError = (error) => ({
  type: 'FETCH_WEATHER_FAILURE',
  payload: error
});

const fetchWeather = (dispatch) => async (showplaceService, country, lang) => {
  dispatch(weatherRequested());
  try {
    const data = await showplaceService.getWeather(country, lang);
    await dispatch(weatherLoaded(data))
  } catch (error) {
    dispatch(weatherFetchError(error))
  }
}

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
  fetchShowplace,
  fetchWeather
};
