import React, {Component} from "react";
import {Box, Container, Title} from "./StateStyle";

export class State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Islom",
      surname: "Kabulov"
    }
  }
  render() {
    const onChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }
    return (
      <div>
        <form action="#">
          <h2>Name {this.state.name}</h2>
          <h2>Surname {this.state.surname}</h2>
          <input name="name" onChange={onChange} type="text" placeholder="name" />
          <input name="surname" onChange={onChange} type="text" placeholder="surname" />
          <hr/>
          <Container className="title">
            <Title className="subtitle">Styled component</Title>
            <Box type="large"/>
            <Box type="medium"/>
            <Box type="small"/>
          </Container>
        </form>
      </div>
    )
  }
}