import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  state = {
    todos:[
      {
        id:1,
        title:'First todo',
        completed: false

      },
      {
        id:2,
        title:'Second todo',
        completed: false

      },
      {
        id:3,
        title:'Third todo',
        completed: true

      },
      {
        id:4,
        title:'Fourth todo',
        completed: false

      }
    ]
  }


  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
