import React from "react";
import Todo from "./Todo.js";

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

export default TodoList;
