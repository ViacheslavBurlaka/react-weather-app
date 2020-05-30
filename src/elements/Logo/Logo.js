import React from 'react';

import classes from './Logo.module.css';

const Logo = ({ colorScheme, clicked }) => {
  let logoWithColorScheme = [classes.Logo, colorScheme === 'dark' ? classes.Dark : classes.Light];
  return (
    <h1 className={logoWithColorScheme.join(' ')} onClick={clicked}>
      My Weather
    </h1>
  );
};

export default Logo;
