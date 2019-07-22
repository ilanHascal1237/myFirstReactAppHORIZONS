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
    var copy = current.slice();
    copy.push({ taskText: stringTodo, completed: false });
    this.setState({ todos: copy });
  }

  removeTodo(index) {
    var current = this.state.todos;
    var copy = current.slice();
    copy.splice(index, 1);
    this.setState({ todos: copy });
    console.log(index);
  }
  todoDone(index) {
    const copy = this.state.todos.slice(); //copy of dummyDataa
    copy[index].completed = true;
    this.setState({ todos: copy });
  }
  render() {
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
