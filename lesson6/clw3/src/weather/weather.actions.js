import { getWeatherData } from "./weather.gateway";

export const WEATHER_DATA_RECIEVED = 'WEATHER_DATA_RECIEVED';

export const weatherDataRecieved = weatherData => ({type: WEATHER_DATA_RECIEVED, payload: {weatherData}});
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
