import React from "react";
import Todo from "./Todo.js";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((data, index) => (
          <Todo
            xClick={index => this.props.todoXClick(index)}
            text={data.taskText}
            key={index}
            indexNum={index}
            completed={data.completed}
            completer={i => this.props.complete(i)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
