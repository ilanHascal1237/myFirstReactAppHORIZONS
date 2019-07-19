import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.completed) {
      return (
        <li>
          <button onClick={e => this.props.xClick(this.props.indexNum)}>X</button>
          <strike>{this.props.text} </strike>
          <button>√</button>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <button onClick={e => this.props.xClick(this.props.indexNum)}>X</button>
            {this.props.text}
            <button onClick={e => this.props.completer(this.props.indexNum)}>√</button>
          </li>
        </div>
      );
    }
  }
}

export default Todo;
