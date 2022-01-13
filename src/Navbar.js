import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Dog from "./Dog.js";
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className='navbar'>
        <NavLink exact className="navbar-active" to="/">
            Home
        </NavLink>
        {this.props.dogs.map(dog => 
            <NavLink exact className="navbar-active" to={`/dogs/${dog.name}`}>
                {dog.name}
            </NavLink>
        )}
      </nav>
    );
  }
}

export default Navbar;
