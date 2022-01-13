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
      <div className="container">
        <div className="row">
          {this.props.dogs.map((dog) => (
            <Link
              to={`/dogs/${dog.name}`}
              className="col col-sm-8 col-md-6 col-lg-4 col-xl-3 Dog"
            >
              <div className="">
                <h1>{dog.name}</h1>
                <img src={dog.src} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
