import React, { Component } from "react";
import spinner from "./loder.gif";

export default class Spinner extends Component {
  render() {
    return (
      <>
        <img src={spinner} alt="spinner" style={{height:'80px',width:'80px'}} />
      </>
    );
  }
}
