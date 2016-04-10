import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <p class="navbar-text navbar-left">TIKR</p>
          <p class="navbar-text navbar-right">Built by <a href="#" class="navbar-link">Filbot</a></p>
        </div>
      </nav>
    );
  }
}
