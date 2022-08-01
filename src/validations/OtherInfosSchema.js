import * as yup from "yup";

export const PersonalInfoSchema = yup.object().shape({
  terms: yup.bool().oneOf([true], "Você precisa aceitar os termos e condições"),
});
