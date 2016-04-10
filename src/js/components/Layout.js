import React from "react";

import Table from "./Table";
import Header from "./Header";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Table {...this.props} />
        </div>
      </div>
    );
  }
}
