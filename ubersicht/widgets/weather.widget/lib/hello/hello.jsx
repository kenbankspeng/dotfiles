import { styled } from "uebersicht";

const Container = styled("h1")`
  font-family: Ubuntu;
  font-size: 20px;
  text-align: center;
  color: red;
`;

export const Widget = () => <Container>Hello</Container>;
