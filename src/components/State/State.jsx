import React, {Component} from "react";

export class State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      title: "Webbrain academy"
    }
    console.log("constructor");
  }
  render() {
    console.log('render');
    // let count = 0;
    const plus = () => {
      if(this.state.count < 10) this.setState({count: this.state.count + 1})
    }
    const minus = () => {
      if(this.state.count > 1) this.setState({count: this.state.count - 1})
    }
    return (
      <div>
        <h1>Hi {this.state.title}</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </div>
    )
  }
}