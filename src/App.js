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

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
