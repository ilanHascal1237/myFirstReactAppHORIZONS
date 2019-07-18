import React from "react";
import ReactDOM from "react-dom";

const dummyData = ["go home", "laundry", "pick up supplies"];

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <button>X</button> {this.props.text}
      </li>
    );
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
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList data={dummyData} />
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
        {this.props.data.map(data => (
          <Todo text={data} />
        ))}
      </ul>
    );
  }
}
ReactDOM.render(<TodoApp />, document.getElementById("root"));
