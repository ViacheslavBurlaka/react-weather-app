import React from 'react';

import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      {props.children}
      <div className={classes.Separator}/>
      <p>
        © 2020. React weather app. <br/>
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
