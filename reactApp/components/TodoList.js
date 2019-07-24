import React from "react";
import Todo from "./Todo.js";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul >
        {this.props.todos.map((data, index) => (
          <Todo
            xClick={() => this.props.todoXClick(data._id)}
            text={data.task}
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
{/* <ul style="list-style: none;"> */}
