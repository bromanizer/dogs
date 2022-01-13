import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Dog from "./Dog.js";
import DogList from "./DogList.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import whiskey from "./imgs/whiskey.jpg";
import hazel from "./imgs/hazel.jpg";
import tubby from "./imgs/tubby.jpg";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={this.props.dogs} />} />
          {this.props.dogs.map((dog) => (
            <Route
              exact
              path={`/dogs/${dog.name}`}
              element={<Dog dog={dog}/>}
            />
          ))}
          <Route path="*" element={<DogList dogs={this.props.dogs} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
