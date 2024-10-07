import { GET_WEATHER_DATA } from "./weather.actions";

const initialState = { weatherData: null, };

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    default:
      return state;
  }
}

export default weatherReducer;