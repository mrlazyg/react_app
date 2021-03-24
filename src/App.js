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
    other: 'Other Properties',
    toggle: false,
  };

  switchHandler = (newName) => {
    // console.log('Clicked!');
    this.setState({
      persons: [
        { name: 'Jane', age: Math.floor(Math.random() * 30) },
        { name: 'Max', age: Math.floor(Math.random() * 30) },
        { name: 'Megha', age: Math.floor(Math.random() * 30) },
      ],
    });
  };

  changeHandler = (event) => {
    // console.log('Clicked!');
    this.setState({
      persons: [
        { name: event.target.value, age: Math.floor(Math.random() * 30) },
        { name: event.target.value, age: Math.floor(Math.random() * 30) },
        { name: 'Megha', age: Math.floor(Math.random() * 30) },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: '#EF7C8E',
      color: '#EEE',
      borderRadius: '5px',
      padding: '5px 15px',
    };

    return (
      <div className='App'>
        <h1>Welcome to React</h1>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={style} onClick={this.switchHandler}>
          Switch Name
        </button>
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            change={this.changeHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchHandler.bind(this, 'Max has changed!')}
            change={this.changeHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            change={this.changeHandler}
          />
        </div>
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
