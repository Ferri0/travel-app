const showplacesList = (state, action) => {
  if (!state) {
    return {
      showplaces: [],
      loading: true,
      error: false,
      lang: 'ua',
    };
  };

  switch (action.type) {
    case 'FETCH_SHOWPLACE_REQUEST': {
      return {
        ...state.showplacesList,
        loading: true,
      }
    }

    case 'FETCH_SHOWPLACE_SUCCESS': {
      return {
        ...state.showplacesList,
        showplaces: action.payload,
        loading: false,
        error: false,
      }
    }

    case 'FETCH_SHOWPLACE_FAILURE': {
      return {
        ...state.showplacesList,
        showplaces: [],
        loading: false,
        error: action.payload
      }
    }

    default:
      return state.showplacesList;
  }
};

export {
  showplacesList
};
