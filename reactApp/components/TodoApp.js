import React from "react";
import InputLine from "./InputLine.js";
import TodoList from "./TodoList.js";
import axios from "axios";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo(stringTodo) {
    var current = this.state.todos;
    var copy = current.slice(); //copy the array
    copy.push({ taskText: stringTodo, completed: false });
    this.setState({ todos: copy }); //set the todos equal tho the copy of the new array with updated taskes
  }

  removeTodo(index) {
    var current = this.state.todos;
    var copy = current.slice(); //copy the array
    copy.splice(index, 1); // splice it out of the array..starts at the indx then removes 1 element starting form the given index
    this.setState({ todos: copy }); //reset the state
  }
  todoDone(index) {
    const copy = this.state.todos.slice(); //copy of dummyDataa
    copy[index].completed = true;
    this.setState({ todos: copy });
  }
  render() {
    // the submit prop in inputLIne will implement the addTodo function
    return (
      <div>
        <InputLine submit={input => this.addTodo(input)} />
        <TodoList
          complete={index => this.todoDone(index)}
          todoXClick={index => this.removeTodo(index)}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default TodoApp;
