import React, {Component} from "react";

export class Inputs extends Component {
  constructor() {
    super()
    this.state = {
      title: "Webbrain students"
    }
  }
  render() {
    const onChange = (e) => {
      this.setState({title: e.target.value})
    }
    return(
      <form>
        <h1>This is {this.state.title}</h1>
        <input onChange={onChange} type="text" placeholder="name" />
      </form>
    )
  }
}