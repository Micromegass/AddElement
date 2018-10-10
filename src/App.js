import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {

      tasks: ["tarea1", "tarea2"]
    }
  }


  render() {
    return (
      <div>
        <h1> Hola Mundo </h1>
        <ul>

          {this.state.tasks.map(task =>

            <li>{task}</li>

          )}

        </ul>


            <button onClick={this.addTask.bind(this)}> Add Task </button>
            <button onClick={this.updateTask.bind(this)}>Modify</button>
      </div>
    );
  }


  addTask() {

      this.setState({
        tasks: this.state.tasks.concat('New Element')

      });
    }

  updateTask() {

    const index = this.state.tasks.findIndex(task => task === "tarea2");

    this.setState({

      tasks: this.state.tasks.map((task, i) =>
    
          i === index ? "Actualizado" : task
    
      )
    });

  }


  }



export default App;
