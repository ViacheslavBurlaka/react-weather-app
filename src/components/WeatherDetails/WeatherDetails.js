import React from 'react';

import classes from './WeatherDetails.module.css';
import Icon from '../../elements/Icon/Icon';
import Temperature from './Temperature/Temperature';
import Description from './Description/Description';
import Date from './Date/Date';
import Place from './Place/Place';

const weatherDetails = ({ data: { city, country, description, temperature } }) => {
  return (
    <div className={classes.WeatherDetailsWrapper}>
      <Place city={city} country={country} />
      <div className={classes.WeatherIconWrapper}>
        <Icon type={description} />
      </div>
      <div className={classes.WeatherDataWrapper}>
        <Temperature degrees={temperature} />
        <Description type={description} />
        <Date />
      </div>
    </div>
  );
};

export default weatherDetails;
