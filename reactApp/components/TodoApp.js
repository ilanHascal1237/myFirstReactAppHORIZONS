import React from "react";
import InputLine from "./InputLine.js";
import TodoList from "./TodoList.js";

const dummyData = [
  { taskText: "go home", completed: false },
  { taskText: "laundry", completed: false },
  { taskText: "pick up supplies", completed: true }
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

  addTodos(stringTodo) {
    dummyData.push({ taskText: stringTodo, completed: false });
    this.setState({ todos: dummyData });
  }

  render() {
    return (
      <div>
        <InputLine submit={input => this.addTodos(input)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoApp;