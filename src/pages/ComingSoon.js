import React from "react";
import "./ComingSoon.css";

export default class ComingSoon extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="coming-soon">
          <h1 className="title">Oops, sorry...</h1>
          <h3 className="subtitle">Currently updating my portfolio.</h3>
          <img
            src="https://i.pinimg.com/originals/bc/53/34/bc5334475aa08579ffbf33e395cb3e34.jpg"
            alt=""
          />
          <div className="footer">
            <h3 className="subtitle email">
              petros.chantz [at] gmail [dot] com
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
