import React from "react";

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ""
    };
  }
  handleTyping(event) {
    //////
    event.preventDefault();
    this.setState({ typedText: event.target.value });
  }

  handleSubmit() {
    this.props.submit(this.state.typedText);
    this.setState({ typedText: "" });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="TODO task"
          value={this.state.typedText}
          onChange={event => this.handleTyping(event)}
        />
        <input type="submit" onClick={() => this.handleSubmit()} placeholder="Submit your task" />
      </div>
    );
  }
}

export default InputLine;
