import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "lsq",
      gender: "boy",
      favouriteDrink: "coffee",
      intro: "a boy who loves programming."
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleFdChange = this.handleFdChange.bind(this);
    this.handleIntroChange = this.handleIntroChange.bind(this);
  }
  handleIntroChange(event) {
    this.setState({ intro: event.target.value });
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleFdChange(event) {
    this.setState({ favouriteDrink: event.target.value });
  }
  handleGenderChange(event) {
    this.setState({ gender: event.target.value });
  }
  handleSubmit(event) {
    alert(event.target);
    event.prventDefault();
  }
  render() {
    return (
      <form>
        <div>
          name:
          <input
            name="name"
            onChange={this.handleChange}
            value={this.state.value}
            className="form-control"
          />
        </div>
        <div>
          gender: boy:
          <input
            value="boy"
            type="radio"
            name="gender"
            onChange={this.handleGenderChange}
          />
          girl:
          <input
            value="girl"
            type="radio"
            name="gender"
            onChange={this.handleGenderChange}
          />
        </div>
        favourite drink:
        <select
          value={this.state.favouriteDrink}
          onChange={this.handleFdChange}
        >
          <option value="" />
          <option value="tea">tea</option>
          <option value="coffee">coffee</option>
          <option value="milk">milk</option>
        </select>
        <div />
        <div>
          introduction:{" "}
          <textarea
            value={this.state.intro}
            onChange={this.handleIntroChange}
          />
        </div>
        <p>
          {this.state.name} is a {this.state.gender} and he likes{" "}
          {this.state.favouriteDrink}
        </p>
        <p>Self Introduction: {this.state.intro}</p>
      </form>
    );
  }
}

module.exports = Form;
