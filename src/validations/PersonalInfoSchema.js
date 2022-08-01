import * as yup from "yup";

const phoneRegExp =
  /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;

export const PersonalInfoSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(3, "Nome inválido")
    .required("Este campo é obrigatório!"),
  cel: yup
    .string()
    .matches(phoneRegExp, "Número de telefone inválido")
    .required("Este campo é obrigatório!"),
  birthday: yup
    .date("Informe sua data de nascimento")
    .required("Este campo é obrigatório!")
    .nullable()
    .typeError("Data inválida"),
});
