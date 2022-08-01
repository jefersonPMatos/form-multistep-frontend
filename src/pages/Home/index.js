import { Link } from "react-router-dom";

import { Container, BoxLeft, BoxRight, Text } from "./styles";

import { Login } from "../../components/Login";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

export default function Home() {
  return (
    <Container>
      <Card>
        <BoxLeft>
          <Login />
        </BoxLeft>
        <BoxRight>
          <h1>Cadastre-se</h1>

          <Text>
            <p>Ainda não tem uma conta?</p>
            <p>Cadastre-se!</p>
          </Text>
          <Link to="/register">
            <Button>Cadastrar</Button>
          </Link>
        </BoxRight>
      </Card>
    </Container>
  );
}
