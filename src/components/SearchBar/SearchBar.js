import React from 'react'

import classes from './SearchBar.module.css';
import InputField from '../../elements/InputField/InputField';
import Button from '../../elements/Button/Button';

const searchBar = (props) => {
  return (
    <div className={classes.SearchBarWrapper}>
      <InputField
        type="text"
        name="city"
        label="Location"
        placeholder="Enter a city"
        value={props.value}
        keyPressed={props.onKeyPressed}
        handleChange={props.onChangeHandler}
        error={props.error}
      />
      <Button
        name="searchSubmit"
        type="submit"
        position="onForm"
        clicked={props.onClickHandler}
        disabled={props.value <= 0}
      >
        Set
      </Button>
    </div>
  );
};

export default searchBar;
