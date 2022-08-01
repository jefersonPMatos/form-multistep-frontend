import * as yup from "yup";

export const SignSchema = yup.object().shape({
  email: yup
    .string()
    .email("Informe um email válido!")
    .required("Informe seu email!"),
  password: yup
    .string()
    .min(6, "A senha precisa ter pelo menos 6 dígitos!")
    .required("Este campo é obrigatório!"),
  confirmPassword: yup
    .string()
    .required("Este campo é obrigatório!")
    .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais!"),
});
