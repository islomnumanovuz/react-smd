import styled, {css} from "styled-components"

const Container = styled("div")`
  width: 80%;
  margin: 0 auto;
  background-color: green;
  padding: 20px;
`

const commonCss = css`
  text-align: center;
  color: white;
  font-size: 30px;
  border: 1px solid black;
  padding: 10px;
`
const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  ${commonCss}
  font-size: 26px;
`
const Description = styled("h2")`
  ${commonCss}
  font-size: 20px;
  color: pink;
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
  ${flex};
  width: ${(props) => props.type === "large" ? "200px" : "100px"};
  height: ${(props) => props.type === "large" ? "200px" : "100px"};
  background-color: blue;
  border-radius: 50%;
  width: ${getSize};
  height: ${getSize};
  background-color: ${(props) => props.bgColor}
`
export {Container, Title, Box, Description}