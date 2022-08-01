import { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useNavigate } from "react-router-dom";

import { Container, ProgressBar, Body } from "./styles";

import Api from "../../services/Api";

import { SignUpInfo } from "../Steps/SignUpInfo";
import { PersonalInfo } from "../Steps/PersonalInfo";
import { OtherInfo } from "../Steps/OtherInfo";
import { AvatarFile } from "../Steps/AvatarFile";
import { Button } from "../Button";

const formTitles = [
  "Informações de Login",
  "Informações Pessoais",
  "Escolha seu avatar",
  "Outras Informações",
];

export default function Form() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullname: "",
    cel: "",
    birthday: "",
    terms: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  function handleSubmit(event) {
    event.preventDefault();

    Api.post("cadastrar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
        Notify.success("Cadastro efetuado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        Notify.failure("Desculpa, algo inexperado aconteceu");
        // navigate("/");
      });
  }

  const pageDisplay = () => {
    if (step === 0) {
      return (
        <SignUpInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    } else if (step === 1) {
      return (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    } else if (step === 2) {
      return (
        <AvatarFile
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    } else if (step === 3) {
      return (
        <OtherInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    } else {
      return (
        <Container>
          <h2>Tudo certo! 🚀</h2>
          <div>
            <Button onClick={prevStep}>Voltar</Button>
            <Button onClick={handleSubmit}>Finalizar</Button>
          </div>
        </Container>
      );
    }
  };

  return (
    <Container>
      <h2>{formTitles[step]}</h2>
      <ProgressBar>
        <div
          style={{
            width:
              step === 0
                ? "20%"
                : step === 1
                ? "40%"
                : step === 2
                ? "60%"
                : step === 3
                ? "80%"
                : "100%",
          }}
        />
      </ProgressBar>
      <Body>{pageDisplay()}</Body>
    </Container>
  );
}
