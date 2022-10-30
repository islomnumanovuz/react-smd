import React, {Component} from "react";

export class State extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log("constructor");
  }
  render() {
    console.log('render');
    let count = 0;
    const plus = () => {
      count += 1
      console.log(count);
    }
    const minus = () => {
      count -= 1
      console.log(count);
    }
    return (
      <div>
        <h1>Hi webbrain academy</h1>
        <h3>Count: {count}</h3>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </div>
    )
  }
}