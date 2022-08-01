import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Informe um email válido!")
    .required("Por favor, informe um email válido!"),
  password: yup
    .string()
    .min(6, "A senha precisa ter pelo menos 6 dígitos!")
    .required("Este campo é obrigatório!"),
});
