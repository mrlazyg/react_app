import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'uiique', name: 'Jane', age: Math.floor(Math.random() * 30) },
      { id: 'jhdajd', name: 'Max', age: Math.floor(Math.random() * 30) },
      { id: 'jahdsg', name: 'Megha', age: Math.floor(Math.random() * 30) },
    ],
    other: 'Other Properties',
    showPerson: false,
  };

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
    const style = {
      backgroundColor: '#EF7C8E',
      color: '#EEE',
      borderRadius: '5px',
      padding: '5px 15px',
    };

    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((p, index) => {
            return (
              <Person
                key={p.id || index}
                name={p.name}
                age={p.age}
                change={(event) => this.changeHandler(event, p.id)}
                // click={this.switchHandler.bind(this, 'Max has changed!')}
              />
            );
          })}
          {/* <Person
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
          /> */}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Welcome to React</h1>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={style} onClick={this.togglePerson}>
          Toggle Name
        </button>
        {person}
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
