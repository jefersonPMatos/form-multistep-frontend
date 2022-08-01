import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Api from "../../../services/Api";

import { Container, Input } from "./styles";

import { Button } from "../../Button";

import { SignSchema } from "../../../validations/SignInfoSchema";
import { useState } from "react";

export function SignUpInfo({ formData, setFormData, nextStep }) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignSchema),
  });

  const [userExist, setUserExist] = useState("");
  const email = watch("email");

  const checkEmail = async () => {
    await Api.put(`checkemail/${email}`)
      .then((res) => {
        console.log(res);
        setUserExist("");
      })
      .catch((error) => {
        setUserExist(error.response.data.message);
      });
  };

  const submitFormData = async (data) => {
    setFormData({ ...formData, email: data.email, password: data.password });
    nextStep();
  };

  return (
    <Container onSubmit={handleSubmit(submitFormData)}>
      <Input
        bc={userExist || errors.email ? "red" : ""}
        type="text"
        placeholder="Seu email"
        defaultValue={formData.email}
        {...register("email")}
        onBlur={checkEmail}
      />

      {userExist !== "" ? (
        <p>{userExist}</p>
      ) : (
        <p style={{ color: "#Ff1a73" }}>{errors.email?.message}</p>
      )}

      <Input
        bc={errors.password && "red"}
        type="password"
        placeholder="Crie uma senha"
        {...register("password")}
      />
      <p style={{ color: "#Ff1a73" }}>{errors.password?.message}</p>

      <Input
        bc={errors.confirmPassword && "red"}
        type="password"
        placeholder="Confirme sua senha"
        {...register("confirmPassword")}
      />
      <p style={{ color: "#Ff1a73" }}>{errors.confirmPassword?.message}</p>

      <Button>Próximo</Button>
    </Container>
  );
}
