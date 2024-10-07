const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

export const getWeatherData = weatherData => ({type: GET_WEATHER_DATA, payload: {weatherData}});
export const fetchWeatherData = () => {
  return function(dispatch) {
    fetch(`${baseUrl}`).then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error();
    })
      .then(weatherData => {
        return dispatch(getWeatherData(weatherData));
      })
      .catch(err => {
        console.error(err);
      });
  }
};
