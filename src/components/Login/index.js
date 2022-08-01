import { useContext, useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Api from "../../services/Api";

import { AuthContext } from "../../Contexts/AuthContext";
import { LoginSchema } from "../../validations/LoginSchema";

import { Container, Input, Form } from "./styles";

import { Button } from "../Button";

import Spinner from "../../assets/images/spinner.svg";

export function Login() {
  const { setAuthenticated, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const submitLogin = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    setLoading(true);
    await Api.post("login", user)
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        setAuthenticated(true);
        Notify.success("Bem vindo!");
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
        Notify.failure("Usuário ou senha incorreto");
      });
  };

  return (
    <Container onSubmit={handleSubmit(submitLogin)}>
      <h1>Login</h1>
      <Form>
        <Input type="email" placeholder="Email" {...register("email")} />
        <p style={{ color: "#Ff1a73" }}>{errors.email?.message}</p>

        <Input type="password" placeholder="Senha" {...register("password")} />
        <p style={{ color: "#Ff1a73" }}>{errors.password?.message}</p>

        <p>Esqueceu sua senha?</p>
        {loading ? (
          <img src={Spinner} width={50} alt="" />
        ) : (
          <Button>Login</Button>
        )}
      </Form>
    </Container>
  );
}
