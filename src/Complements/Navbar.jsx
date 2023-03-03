import React, { Component } from 'react'
import logo from "../Complements/assets/pokemon_logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
            <div className="navbar">
              <img className="nav-logo" src={logo} alt="" />
            </div>
        </nav>
        </div>
    );
  }
}
