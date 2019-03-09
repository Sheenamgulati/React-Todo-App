import React, { Component } from 'react';
import Todo from './todo.js';
import AddTodo from './AddTodo.js';
class App extends Component {
  state= {
    todos: [
      { id: 1, item: 'Play Badminton' },
      { id: 2, item: 'Evaluate Assignments' }
    ]
  }
  deleteTodo = (id) =>
  {
    let todos = this.state.todos.filter( todo => {
      return todo.id!== id
    })
    this.setState({
      todos : todos
    })
   // console.log(id)
  }
  addTodo = (item) => {
   //console.log(item);
   item.id=Math.random();
   let todos= [...this.state.todos, item]
   this.setState({
     todos: todos
   })
  }
  render() {
    return (
      <div className="App container">
       <h3 className="center purple-text">My Todo's</h3>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}  

export default App;
