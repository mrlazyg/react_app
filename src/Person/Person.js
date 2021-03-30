import React from 'react';
import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        Hi, I'm {props.name} and {props.age} years old!
      </p>
      <input type='text' onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default person;
