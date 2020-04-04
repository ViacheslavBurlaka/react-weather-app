import React from 'react';
import classes from './Clock.module.css'

const Clock = (props) => {
  const date = props.date;
  return (
    <div className={classes.Clock}>
      {date.toLocaleTimeString()}
    </div>
  )
};

export default Clock;
