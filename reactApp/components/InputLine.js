import React from "react";

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

export default InputLine;
