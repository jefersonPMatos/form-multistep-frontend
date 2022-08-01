import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  gap: 2rem;
`;

export const Input = styled.input`
  font-size: 16px;
  background-color: transparent;
  width: 300px;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: 1px solid #000;
  border-radius: 15px;
  caret-color: #ff1a73;
  outline-color: #ff1a73;

  &:hover {
    ::placeholder {
      opacity: 0.5;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
`;
