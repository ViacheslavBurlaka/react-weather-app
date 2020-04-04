import React from 'react'

import classes from './InputField.module.css';
import assetMapping from '../../assets/assetMapping.json';

const InputField = (props) => {
  return (
    <div className={classes.InputFieldWrapper}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
        onKeyPress={props.keyPressed}
        style={(props.error) ? {'borderBottomColor': assetMapping.colors.error} : null}
        required/>
    </div>
  );
};

export default InputField;
