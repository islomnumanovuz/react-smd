import React, {Component} from "react";

export class State extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const count = 0;
    return (
      <div>
        <h1>Hi webbrain academy</h1>
        <h3>Count: {count}</h3>
      </div>
    )
  }
}