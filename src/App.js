import React, { Component } from 'react';
import data from './data.json';
import classes from './App.css';
import Persons from './components/Persons/Persons';

class App extends Component {
  state = data;

  /* switchHandler = (newName) => {
    // console.log('Clicked!');
    this.setState({
      persons: [
        { name: 'Jane', age: Math.floor(Math.random() * 30) },
        { name: newName, age: Math.floor(Math.random() * 30) },
        { name: 'Megha', age: Math.floor(Math.random() * 30) },
      ],
    });
  }; */

  changeHandler = (event, id) => {
    // console.log('Clicked!');
    const index = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[index] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({ persons: persons });
  };

  togglePerson = () => {
    const toggle = this.state.showPerson;
    this.setState({ showPerson: !toggle });
  };

  render() {
    /* const style = {
      backgroundColor: '#EF7C8E',
      color: '#EEE',
      cursor: 'pointer',
      borderRadius: '5px',
      padding: '5px 15px',
      ':hover': {
        backgroundColor: 'white',
        color: 'black',
      },
    }; */

    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          <Persons persons={this.state.persons} changed={this.changeHandler} />
        </div>
      );
      /* style.backgroundColor = '#025955';
      style[':hover'] = {
        backgroundColor: 'black',
        color: 'white',
      }; */
    }

    return (
      <div className={classes.App}>
        <h1>Welcome to React</h1>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className={classes.Button} onClick={this.togglePerson}>
          Toggle Name
        </button>
        {person}
      </div>
    );
  }
}

export default App;
