import React, { Component } from "react";

import Header from "./components/Header";
import Product from "./components/Product";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="row">
          <div className="col-sm-6 col-xs-12 col-md-6 col-lg-6">
            <Product />
          </div>
          <div className="col-sm-6 col-xs-12 col-md-6 col-lg-6">
            <Product />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
