import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`;

export const FileInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 5px solid #ff1a73;
  }
  input {
    display: none;
  }
`;
