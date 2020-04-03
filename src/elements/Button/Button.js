import React from 'react'

import classes from './Button.module.css';

const button = (props) => {
  let buttonClasses = [
    classes.ButtonWrapper,
    (props.position === 'onForm') ? classes.FormButtonWrapper : null
  ];

  const {disabled} = props;
  return (
    <div className={buttonClasses.join(' ')}>
      <button
        disabled={!!disabled}
        type={props.type}
        name={props.name}
        onClick={props.clicked}>{props.children}</button>
    </div>
  );
};

export default button;