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
    axios.get(dbUrl + "/all").then(result => {
      console.log(result);
      if (result.data.success) {
        this.setState({
          todos: result.data.todos
        });
      } else {
        console.log("an error occured on the server side");
      }
    });
  }
  addTodo(stringTodo) {
    // var current = this.state.todos;
    // var copy = current.slice(); //copy the array
    // copy.push({ taskText: stringTodo, completed: false });
    // this.setState({ todos: copy }); //set the todos equal tho the copy of the new array with updated taskes\
    // const postBody = { task: stringTodo };

    axios.post(dbUrl + "/add", { taskText: stringTodo }).then(todo => {
      console.log(todo.data);
      this.setState({ todos: this.state.todos.concat(todo.data) });
    });
  }

  removeTodo(id) {
    console.log("IDDDDDD", id);
    //find the todo object in the database
    axios.delete(dbUrl + "/remove/" + id).then(response => {
      const newTodos = this.state.todos.filter(todoObj => {
        console.log("todoobj", todoObj);
        //compare the ids
        if (todoObj._id !== id) {
          return true;
        } else {
          return false;
        }
      });
      //reset the statte of the todos
      this.setState({
        todos: newTodos
      });
    });
  }
  todoDone(index) {
    const copy = this.state.todos.slice(); //copy of dummyDataa
    copy[index].completed = !copy.completed;
    this.setState({ todos: copy });
  }
  render() {
    // the submit prop in inputLIne will implement the addTodo function
    return (
      <div >
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



//     display: flex;
// justify-content: center;
// align-items: center;

export default TodoApp;
