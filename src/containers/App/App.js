import React, { Component } from 'react';

import { MoonLoader } from 'react-spinners';

import classes from './App.module.css';
import assetMapping from '../../assets/assetMapping.json';
import Card from '../../elements/Card/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import Preview from '../../components/Preview/Preview';
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';
import Clock from '../../components/Clock/Clock';

class App extends Component {
  state = {
    date: new Date(),
    searchBarInput: '',
    weatherDetails: {
      city: null,
      country: null,
      temperature: null,
      description: ''
    },
    loading: false,
    error: false
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  // Update state with current search bar input
  searchBarHandler = (e) => {
    this.setState({
      searchBarInput: e.target.value
    });
  };

  // if 'enter' key pressed => call setWeather handler
  keyPressedHandler = (e) => {
    if (e.key === 'Enter') {
      this.setWeather();
    }
  };

  // Reset state after clicking on Logo or Try Again button
  tryAgainHandler = () => {
    this.setState({
      searchBarInput: '',
      weatherDetails: {},
      error: false
    });
  };

  // Fetch weather information and update state
  setWeather = () => {
    const city = this.state.searchBarInput;
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API_URL = process.env.REACT_APP_API_URL;
    const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
    this.setState(
      {
        weatherDetails: {},
        loading: true,
        error: false
      },
      () => {
        // Executed as callback function
        fetch(URL)
          .then((res) => res.json())
          .then((data) => {
            // If city exists, update weather details
            if (data.cod === 200) {
              this.setState({
                weatherDetails: {
                  temperature: data.main.temp,
                  description: data.weather[0].main,
                  city: data.name,
                  country: data.sys.country
                },
                loading: false,
                searchBarInput: ''
              });
            } else {
              // If city doesn't exist, throw error
              throw data.cod;
            }
          })
          .catch((err) => {
            console.log(err);
            this.setState({
              loading: false,
              error: true
            });
          });
      }
    );
  };

  render() {
    // Conditionally render card content
    let cardContent = <Preview />;
    if (this.state.loading) {
      cardContent = <MoonLoader />;
    } else if (this.state.error) {
      cardContent = <ErrorNotice onClickHandler={this.tryAgainHandler} />;
    } else if (
      this.state.weatherDetails.temperature &&
      this.state.weatherDetails.description !== ''
    ) {
      // Display weather information if temperature and description exists
      cardContent = <WeatherDetails data={this.state.weatherDetails} />;
    }

    return (
      <div className={classes.AppWrapper}>
        <Header
          color={
            assetMapping.colors[
              // Set header color based on weather condition; if error, set color to red
              this.state.error ? 'error' : this.state.weatherDetails.description
            ]
          }
          onClickHandler={this.tryAgainHandler}
        />
        <main className={classes.AppMain}>
          <SearchBar
            value={this.state.searchBarInput}
            onChangeHandler={this.searchBarHandler}
            onClickHandler={this.setWeather}
            onKeyPressed={this.keyPressedHandler}
            error={this.state.error}
          />
          <Card>{cardContent}</Card>
        </main>
        <Footer>
          <Clock date={this.state.date} />
        </Footer>
      </div>
    );
  }
}

export default App;
