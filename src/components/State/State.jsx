import React, {Component} from "react";
import {Box, Button, Container, Description, Title} from "./StateStyle";

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
            <Description>hey I am common css feature</Description>
            <Box bgColor="red" type="large">First box</Box>
            <Box bgColor="coral" type="medium">Second box</Box>
            <Box bgColor="yellow" type="small">Third box</Box>
            <Button type="button" danger>Danger</Button>
            <Button type="button" state="primary">Primary</Button>

          </Container>
        </form>
      </div>
    )
  }
}