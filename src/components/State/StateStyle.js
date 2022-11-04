import styled from "styled-components"

const Container = styled("div")`
  width: 80%;
  margin: 0 auto;
  background-color: green;
  padding: 20px;
`
const Title = styled.h2`
  text-align: center;
  color: white;
`
const getSize = (props) => {
  switch (props.type) {
    case "large": return "200px";
    case "medium": return "150px";
    case "small": return "100px";
    default: return "150px"
  }
}
const Box = styled("div")`
  width: ${(props) => props.type === "large" ? "200px" : "100px"};
  height: ${(props) => props.type === "large" ? "200px" : "100px"};
  background-color: blue;
  border-radius: 50%;
  width: ${getSize};
  height: ${getSize};
`
export {Container, Title, Box}