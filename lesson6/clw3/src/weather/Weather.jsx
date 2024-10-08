import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWeatherData } from './weather.actions';

const Weather = ({cities, getWeatherData}) => {
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cities.map(({id, name, temperature}) => (
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

const mapStateToProps = (state) => {
  return ({cities: state.cities})
}

const mapDispatchToProps = {
  getWeatherData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);