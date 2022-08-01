import { useState } from "react";

import { Container, AvatarWrapper, FileInput } from "./styles";

import { Button } from "../../Button";
import { Avatar } from "../../Avatar";

export function AvatarFile({ formData, setFormData, prevStep, nextStep }) {
  const [avatar, setAvatar] = useState([""]);

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setAvatar(img);
    console.log(img);
  };

  const submitFormData = async () => {
    setFormData({
      ...formData,
      avatar: avatar.data,
    });
    nextStep();
  };

  return (
    <Container>
      <span>
        <AvatarWrapper>
          <FileInput>
            {avatar.preview ? (
              <Avatar sz="150px" src={avatar.preview} />
            ) : (
              <Avatar sz="150px" />
            )}

            <input type="file" onChange={handleFileChange} />
          </FileInput>
        </AvatarWrapper>
        <h3>ESCOLHA SUA MELHOR FOTO</h3>
      </span>
      <div>
        <Button type="button" onClick={prevStep}>
          Voltar
        </Button>
        <Button onClick={submitFormData}>Próximo</Button>
      </div>
    </Container>
  );
}
