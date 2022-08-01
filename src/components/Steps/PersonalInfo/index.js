import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Container, Input } from "./styles";

import { Button } from "../../Button";

import { PersonalInfoSchema } from "../../../validations/PersonalInfoSchema";

export function PersonalInfo({ formData, setFormData, nextStep, prevStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PersonalInfoSchema),
  });

  const submitFormData = async (data) => {
    setFormData({
      ...formData,
      fullname: data.fullname,
      cel: data.cel,
      birthday: data.birthday.toLocaleString("pt-PT").split(",")[0],
    });
    nextStep();
  };

  return (
    <Container onSubmit={handleSubmit(submitFormData)}>
      <Input
        type="text"
        placeholder="Nome Completo"
        defaultValue={formData.fullname}
        {...register("fullname")}
      />
      <p style={{ color: "#Ff1a73" }}>{errors.fullname?.message}</p>

      <Input
        type="tel"
        placeholder="Celular (83) 9 999999999"
        defaultValue={formData.cel}
        {...register("cel")}
      />
      <p style={{ color: "#Ff1a73" }}>{errors.cel?.message}</p>

      <Input
        type="date"
        defaultValue={formData.birthday}
        {...register("birthday")}
      />
      <p style={{ color: "#Ff1a73" }}>{errors.birthday?.message}</p>

      <div>
        <Button type="button" onClick={prevStep}>
          Voltar
        </Button>
        <Button type="submit">Próximo</Button>
      </div>
    </Container>
  );
}
