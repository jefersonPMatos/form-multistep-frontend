import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  color: #fff;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const Text = styled.div`
  display: flex;
  width: 500px;
  text-align: center;
  margin-bottom: 20px;
`;

export const CheckBox = styled.input`
  cursor: pointer;
  transform: scale(3);
  background-color: red;
  margin-bottom: 20px;
`;
