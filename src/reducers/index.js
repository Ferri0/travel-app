import {
  showplacesList
} from "./showplacesList";
import {
  weatherData
} from "./weather";

const reducer = (state, action) => ({
  showplacesList: showplacesList(state, action),
  weatherData: weatherData(state, action)
})

export default reducer;
