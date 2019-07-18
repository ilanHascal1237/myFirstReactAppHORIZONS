import React from "react";

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

export default Todo;
