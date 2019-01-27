import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        
        console.log(temps);
        return(
            <tr key = {name}>
                <td> {name} </td>
                <td><Chart data = {temps} color = "orange" units="K"/></td>
                <td><Chart data = {pressures} color = "green" units="hPa"/></td>
                <td><Chart data = {humidities} color = "black" units="%"/></td>
            </tr>
        )

    }


    // export default class WeatherList extends Component {
    render() {
        return (
            <table className="table table_hover">

                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temparature (K)</th>
                        <th>Pressure (hPA) </th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>

            </table>
        );
    }
}

function mapStateToProps(state){ //{weather}  // ES6
    // const weather = state.weather;
    return {weather: state.weather}; // return {weather}; ES6
}

// connected version of weather list
export default connect(mapStateToProps)(WeatherList);