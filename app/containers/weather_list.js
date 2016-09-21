import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WeatherChart from '../components/weather_chart';
import CityMap from '../components/city_map';

class WeatherList extends Component {

    renderWeather(cityData) {

        const name = cityData.city.name;
        const temp = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        //const lon = cityData.coord.lon;
        //const lat = cityData.coord.lat;
        //<td><CityMap lon={ lon } lat={ lat } /></td>

        return(
            <tr key={ name }>

                <td>{ name }</td>
                <td>
                    <WeatherChart data={ temp } color="red" units="K" />
                </td>
                <td>
                    <WeatherChart data={ pressure } color="orange" units="hPa" />
                </td>
                <td>
                    <WeatherChart data={ humidity } color="blue" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
          <table className="table table-hover">
              <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
              </thead>
              <tbody>
              { this.props.weather.map(this.renderWeather) }
              </tbody>
          </table>
        );
    }
}

function mapStateToProps({ weather }) {

    return { weather };
}

export default connect(mapStateToProps)(WeatherList);