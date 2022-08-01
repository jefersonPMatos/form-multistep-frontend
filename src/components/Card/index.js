import { Container } from "./styles";

export function Card({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
