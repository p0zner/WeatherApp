import React from 'react';
import './App.css';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'c3116bcae2b94894b3375314231710';

class App extends React.Component {

  state = {
    temp_c: undefined,
    city: undefined,
    country: undefined,
    wind_mph: undefined,
    feelslike_c: undefined,
    error: undefined,
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;


    if (city) {
      const api_url = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY} &q=${city}&aqi=no`);
      const data = await api_url.json();
      this.setState({
        temp_c: data.current.temp_c,
        city: data.location.name,
        country: data.location.country,
        wind_mph: data.current.wind_mph,
        feelslike_c: data.current.feelslike_c,
        error: undefined
      });
    } else {
      this.setState({
        temp_c: undefined,
        city: undefined,
        country: undefined,
        wind_mph: undefined,
        feelslike_c: undefined,
        error: 'Введите название города',
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className='main'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-5 info'>
                <Info />
              </div>
              <div className='col-sm-7 form'>
                <Form onWeatherInput={this.gettingWeather} />
                <Weather
                  temp_c={this.state.temp_c}
                  city={this.state.city}
                  country={this.state.country}
                  wind_mph={this.state.wind_mph}
                  feelslike_c={this.state.feelslike_c}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;