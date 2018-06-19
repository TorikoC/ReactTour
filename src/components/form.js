import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert(event.target);
    event.prventDefault();
  }
  render() {
    return (
      <form>
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <p>{this.state.value}</p>
      </form>
    );
  }
}

module.exports = Form;
