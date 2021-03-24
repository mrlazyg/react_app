import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        Hi, I'm {props.name} and {props.age} years old!
      </p>
      <input type='text' onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default person;
