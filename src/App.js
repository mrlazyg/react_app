import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jane', age: Math.floor(Math.random() * 30) },
      { name: 'Max', age: Math.floor(Math.random() * 30) },
      { name: 'Megha', age: Math.floor(Math.random() * 30) },
    ],
  };

  switchHandler = (newName) => {
    // console.log('Clicked!');
    this.setState({
      persons: [
        { name: newName, age: Math.floor(Math.random() * 30) },
        { name: 'Max', age: Math.floor(Math.random() * 30) },
        { name: 'Megha', age: Math.floor(Math.random() * 30) },
      ],
    });
  };

  changeHandler = (event) => {
    // console.log('Clicked!');
    this.setState({
      persons: [
        { name: 'Jane', age: Math.floor(Math.random() * 30) },
        { name: event.target.value, age: Math.floor(Math.random() * 30) },
        { name: 'Megha', age: Math.floor(Math.random() * 30) },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Welcome to React</h1>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchHandler.bind(this, 'Jane has changed!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchHandler.bind(this, 'Max has changed!')}
          change={this.changeHandler}
        />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    /* return React.createElement(
      'div',
      { className: 'App' },
      React.createElement('h1', null, "Hi, I'm from React")
    ); */
  }
}

export default App;
