import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Container, Text, CheckBox } from "./styles";

import { Button } from "../../Button";

import { PersonalInfoSchema } from "../../../validations/OtherInfosSchema";

export function OtherInfo({ formData, setFormData, prevStep, nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PersonalInfoSchema),
  });

  const submitFormData = (data) => {
    setFormData({
      ...formData,
      terms: true,
    });
    nextStep();
  };

  return (
    <Container>
      <Text>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </Text>
      <CheckBox type="checkbox" {...register("terms")} />{" "}
      <span>
        <p>Aceito os termos e condições</p>
        <p style={{ color: "#Ff1a73" }}>{errors.terms?.message}</p>
      </span>
      <div>
        <Button type="button" onClick={prevStep}>
          Voltar
        </Button>
        <Button onClick={handleSubmit(submitFormData)}>Próximo</Button>
      </div>
    </Container>
  );
}
