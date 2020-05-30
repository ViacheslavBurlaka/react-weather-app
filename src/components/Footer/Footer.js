import React from 'react';

import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      {props.children}
      <div className={classes.Separator} />
      <p>
        © 2020. React weather app <br />
        <a
          href="https://github.com/ViacheslavBurlaka/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
