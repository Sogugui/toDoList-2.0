import React, { Component } from "react";

class WeatherCard extends Component {

  render() {
    const {dt_txt,weather,main}= this.props.dataWeather;
    return <article>
   <p>Date/Time: {dt_txt}</p>
   <p className="weatherMood">Weather Mood: {weather[0].main}</p>
   <p>Temperature: {main.temp} Farenheit degrees</p>
   <p>Humidity:  {main.humidity}</p>
</article>
  }
}

export default WeatherCard;
