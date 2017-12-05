import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="card" style={{ width: "20rem" }}>
        <img
          className="card-img-top"
          src="http://media.baogiaothong.vn/files/news/2017/11/03/101445-913201720152am_635_iphone_x.jpeg"
          alt="Iphone"
        />
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
