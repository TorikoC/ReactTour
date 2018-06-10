import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    this.tid = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.tid);
  }
  render() {
    return <h1>now: {this.state.date.toLocaleString()}</h1>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Clock />, rootElement);
