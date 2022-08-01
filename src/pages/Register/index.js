import { Container } from "./styles";

import Form from "../../components/Form";
import { Card } from "../../components/Card";

export default function Register() {
  return (
    <Container>
      <h1>Cadastro</h1>
      <Card fd="column" gap="2rem">
        <div>
          <Form />
        </div>
      </Card>
    </Container>
  );
}
