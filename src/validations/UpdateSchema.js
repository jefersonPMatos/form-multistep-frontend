import * as yup from "yup";

export const UpdateSchema = yup.object().shape({
  cel: yup
    .string()
    .min(6, "Número inválido")
    .required("Este campo é obrigatório!"),
  birthday: yup
    .date("Informe sua data de nascimento")
    .required("Este campo é obrigatório!"),
  fullname: yup
    .string()
    .min(3, "Número inválido")
    .required("Este campo é obrigatório!"),
});
