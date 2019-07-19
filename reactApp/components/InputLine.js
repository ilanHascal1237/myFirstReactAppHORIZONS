import React from "react";

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="TODO task" />
        <input
          type="submit"
          onClick={() => this.props.submit("Test Task")}
          placeholder="Submit your task"
        />
      </div>
    );
  }
}

export default InputLine;
