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
    const onSelect = (e) => {
      console.log(e.target.value);
    }
    return(
      <form>
        <h1>This is {this.state.title}</h1>
        <input onChange={onChange} type="text" placeholder="name" />
        <select onChange={onSelect} name="select" id="select">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </form>
    )
  }
}