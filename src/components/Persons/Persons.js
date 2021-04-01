import React from 'react';
import Person from './Person/Person';

const persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <Person
        key={person.id || index}
        name={person.name}
        age={person.age}
        change={(event) => props.changed(event, person.id)}
        // click={props.switchHandler.bind(this, 'Max has changed!')}
      />
    );
  });

export default persons;
