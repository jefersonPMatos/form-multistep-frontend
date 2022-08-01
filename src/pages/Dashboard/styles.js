import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  gap: 1rem;

  span {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 5px;
  }
`;

export const Greeting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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

export const ActionButtons = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 50px;
`;
