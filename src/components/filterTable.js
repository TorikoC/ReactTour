import React from "react";

let fakeItems = [
  { name: "john", from: "USA" },
  { name: "Liu", from: "CHINA" },
  { name: "nakayama", from: "JAPAN" },
  { name: "leo", from: "FRANCE" }
];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onChange(event);
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <input
        value={this.state.value}
        onChange={this.handleChange}
        type="text"
      />
    );
  }
}

function ResultList(props) {
  const items = props.items.map(item => {
    return (
      <li>
        {item.name} from {item.from}
      </li>
    );
  });
  return <ul>{items}</ul>;
}

class FilterTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: "", items: fakeItems };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ key: event.target.value });
    this.setState({
      items: fakeItems.filter(item => item.name.includes(this.state.key))
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.key}</p>
        <SearchBar onChange={this.handleChange} />
        <ResultList items={this.state.items} />
      </div>
    );
  }
}

module.exports = FilterTable;
