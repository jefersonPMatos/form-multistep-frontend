import { Container, Img } from "./styles";

import ProfileDefault from "../../assets/images/perfil.png";

export function Avatar({ src, ...rest }) {
  return (
    <Container {...rest}>
      {src ? (
        <Img src={src} {...rest} alt="avatar" />
      ) : (
        <Img src={ProfileDefault} {...rest} alt="avatar" />
      )}
    </Container>
  );
}
