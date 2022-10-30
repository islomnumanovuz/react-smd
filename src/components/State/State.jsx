import React, {Component} from "react";

export class State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Islom",
      surname: "Kabulov"
    }
  }
  render() {
    const onChangeName = e => {
      this.setState({
        name: e.target.value
      })
    }
    const onChangeSurname = e => {
      this.setState({
        surname: e.target.value
      })
    }
    return (
      <div>
        <form action="#">
          <h2>Name {this.state.name}</h2>
          <h2>Surname {this.state.surname}</h2>
          <input onChange={onChangeName} type="text" placeholder="name" />
          <input onChange={onChangeSurname} type="text" placeholder="surname" />
        </form>
      </div>
    )
  }
}