import { useContext, useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Form,
  Greeting,
  Info,
  ActionButtons,
  Input,
} from "./styles";
import Api from "../../services/Api";

import { AuthContext } from "../../Contexts/AuthContext";
import { UpdateSchema } from "../../validations/UpdateSchema";

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Avatar } from "../../components/Avatar";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  console.log(user);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(UpdateSchema),
  });

  function handleUpdateInfo(data) {
    Api.post(`/${user.email}`, data)
      .then((res) => {
        console.log(res);
        Notify.success("Informações atualizadas");
      })
      .catch((err) => {
        console.log(err);
        Notify.failure("Algo inexperado aconteceu");
      });
  }

  function handleDeleteInfo() {
    Api.delete(`/${user.email}`)
      .then((res) => {
        console.log(res);
        Notify.success("Cadastro deletado");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        Notify.failure("Algo inexperado aconteceu");
      });
  }

  function handleEditing(event) {
    event.preventDefault();
    setEditing(!editing);
  }

  return (
    <Container>
      <Card fd="column">
        {editing ? (
          <>
            <Greeting>
              <h2>Bem vindo, {user.fullname}!</h2>
              <Avatar sz="100px" src={user.avatar} alt="" />
              <p> {user.email}</p>
            </Greeting>
            <Form onSubmit={handleSubmit(handleUpdateInfo)}>
              <Input
                type="text"
                defaultValue={user.fullname}
                {...register("fullname")}
              />

              <Input type="text" defaultValue={user.cel} {...register("cel")} />

              <Input
                type="date"
                defaultValue={user.birthday}
                {...register("birthday")}
              />

              <ActionButtons>
                <Button type="button" onClick={handleEditing}>
                  Cancelar
                </Button>
                <Button type="submit">Atualizar</Button>
                <Button type="button" onClick={handleDeleteInfo}>
                  Deletar conta
                </Button>
              </ActionButtons>
            </Form>
          </>
        ) : (
          <>
            <Greeting>
              <h2>Bem vindo, {user.fullname}!</h2>
              <Avatar sz="100px" src={user.avatar} alt="" />
            </Greeting>
            <Info>
              <span>
                <p>Email:</p>
                <h3>{user.email}</h3>
              </span>
              <span>
                <p>Nome completo:</p>
                <h3>{user.fullname}</h3>
              </span>
              <span>
                <p>Data de nascimento:</p>
                <h3>{user.birthday}</h3>
              </span>
            </Info>
            <ActionButtons>
              <Button type="button" onClick={handleEditing}>
                Editar
              </Button>
            </ActionButtons>
          </>
        )}
      </Card>
    </Container>
  );
}
