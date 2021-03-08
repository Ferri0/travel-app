import {
  showplacesList
} from "./showplacesList";

const reducer = (state, action) => ({
  showplacesList: showplacesList(state, action)
})

export default reducer;
