const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

export const getWeatherData = () => {
  return function(dispatch) {
    try {
      fetch(baseUrl)
        .then(response => {
          if (response.ok) {
            
            return response.json();
          }

          throw new Error();
        })
        .then(cities => {
          dispatch({
            type: GET_WEATHER_DATA,
            payload: { cities },
          });
        });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
};
