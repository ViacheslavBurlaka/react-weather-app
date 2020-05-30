import React from 'react';

import classes from './Place.module.css';
import ReactCountryFlag from 'react-country-flag';

const place = ({ city, country }) => {
  return (
    <div className={classes.WeatherDataPlace}>
      {city}
      <sup>
        <ReactCountryFlag countryCode={country} />
      </sup>
    </div>
  );
};

export default place;
