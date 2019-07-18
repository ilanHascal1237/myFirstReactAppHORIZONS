import React from "react";
import ReactDOM from "react-dom";

const dummyData = [
  { taskText: "go home", completed: false },
  { taskText: "laundry", completed: false },
  { taskText: "pick up supplies", completed: true }
];

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.completed) {
      return (
        <li>
          <button>X</button> <strike>{this.props.text} </strike>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <button>X</button> {this.props.text}
          </li>
        </div>
      );
    }
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="TODO task" />
        <input type="submit" placeholder="Submit your task" />
      </div>
    );
  }
}

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

  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(data => (
          <Todo text={data.taskText} completed={data.completed} />
        ))}
      </ul>
    );
  }
}
ReactDOM.render(<TodoApp />, document.getElementById("root"));
