import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the dog', isCompleted: true},
        { description: 'Pick up milk', isCompleted: true},
        { description: 'Take kid to doctor', isCompleted: true},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted}/>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
