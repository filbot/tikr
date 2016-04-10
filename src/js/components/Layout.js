import React from "react";
import Cards from "./Cards";
import Header from "./Header";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Cards {...this.props} />
        </div>
      </div>
    );
  }
}
