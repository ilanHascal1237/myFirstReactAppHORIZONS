import React from "react";
import InputLine from "./InputLine.js";
import TodoList from "./TodoList.js";

const dummyData = [
  { taskText: "go home", completed: false },
  { taskText: "laundry", completed: false },
  { taskText: "pick up supplies", completed: false }
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.setState({ todos: dummyData });
  }

  addTodo(stringTodo) {
    dummyData.push({ taskText: stringTodo, completed: false });
    this.setState({ todos: dummyData });
  }

  removeTodo(index) {
    dummyData.splice(index, 1);
    this.setState({});
    console.log(index);
  }
  todoDone(index) {
    const copy = dummyData.slice(); //copy of dummyDataa
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
