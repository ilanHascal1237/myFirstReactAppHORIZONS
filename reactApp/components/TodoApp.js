import React from "react";
import InputLine from "./InputLine.js";
import TodoList from "./TodoList.js";
import axios from "axios";
const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    axios
      .get(dbUrl + "/all", { method: "GET", body: JSON.stringify(postBody) })
      .then(function(response) {
        console.log(response);
      })
      .catch(myJson => {
        console.log(myJson);
        this.setState({ data: this.state.todos.concat(myJson) });
      });
  }
  addTodo(stringTodo) {
    // var current = this.state.todos;
    // var copy = current.slice(); //copy the array
    // copy.push({ taskText: stringTodo, completed: false });
    // this.setState({ todos: copy }); //set the todos equal tho the copy of the new array with updated taskes\
    const postBody = { task: stringTodo };

    axios
      .post(dbUrl + "/add", { method: "POST", body: JSON.stringify(postBody) })
      .then(function(response) {
        console.log(response);
      })
      .catch(myJson => {
        console.log(myJson);
        this.setState({ data: this.state.todos.concat(myJson) });
      });
  }

  removeTodo(index) {
    var current = this.state.todos;
    var copy = current.slice(); //copy the array
    copy.splice(index, 1); // splice it out of the array..starts at the indx then removes 1 element starting form the given index
    this.setState({ todos: copy }); //reset the state
  }
  todoDone(index) {
    const copy = this.state.todos.slice(); //copy of dummyDataa
    copy[index].completed = !copy.completed;
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
