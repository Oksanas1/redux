import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as weatherActions from "./weather.actions";

const Weather = ({weatherData, getWeatherData}) => {
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        { weatherData &&
          weatherData.map(({id, name, temperature}) => (
            <li className="city" key={id}>
              <span className="city__name">{name}</span>
              <span className="city__temperature">{temperature} F</span>
            </li>
          ))
        }
      </ul>
    </main>    
  );
};

const mapStateToProps = ({weatherData}) => {
  return ({weatherData})
}

const mapDispatchToProps = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);