import React, { Component } from "react";

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Dog">
        <h1>{this.props.dog.name}</h1>
        <img src={this.props.dog.src} />
        <p>Age: {this.props.dog.age}</p>
        <ul>
          {this.props.dog.facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dog;
