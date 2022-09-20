import React, { Component } from "react";
import WeatherCard from "./WeatherCard/"
import { v4 as uuidv4 } from 'uuid';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      weatherList: this.props.defaultList,
      otro:[]
    }
    // Event binding (Bindear eventos)
    console.log('CONSTRUCTOR')
  }

  async componentDidMount() {
    this.getWeather();
  }

  getWeather = async (city='Madrid') => {
    const res = await fetch('https://api.openweathermap.org/data/2.5/forecast?&q='+city+'&appid=b41cfcab1f0737a0c37740189a12aa65')
    // https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=2.1&appid=b41cfcab1f0737a0c37740189a12aa65&units=metric&lang=ES&cnt=300
    const data = await res.json();
    console.log(data.list);
    this.setState({weatherList:data.list}); 

  }

  render() {
    console.log('RENDER')
    return (
      <section>
        <h1>Weather</h1>
        {
          this.state.weatherList.map(weatherCard =>
            <WeatherCard dataWeather={weatherCard} key={uuidv4()} />
          )
        }
        <button onClick={()=>this.getWeather("Milan")}>Load Weather</button>
        {/*<button onClick={this.handlerResetPokemons}>Reset Pokemons</button>
                <button onClick={this.handlerUpdate}>Force Update</button> */}
      </section>
    );
  }
}

Weather.defaultProps = {
  defaultList: []

}

export default Weather;
