import { getWeatherData } from "./weather.gateway";

export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

export const weatherDataRecieved = weatherData => ({type: GET_WEATHER_DATA, payload: {weatherData}});
export const fetchWeatherData = () => {
  return function(dispatch) {
    getWeatherData()
      .then(weatherData => {
        return dispatch(weatherDataRecieved(weatherData));
      })
      .catch(err => {
        console.error(err);
      });
  }
};
