import React, { Component } from "react";
import Dog from "./Dog.js";
import { Link } from "react-router-dom";
import "./DogList.css";

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="DogList">
        {this.props.dogs.map((dog) => (
          <Link to={`/dogs/${dog.name}`}>
            <div className='Dog'>
                <h1>{dog.name}</h1>
                <img src={dog.src}/>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default DogList;
