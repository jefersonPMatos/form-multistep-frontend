import styled from "styled-components";

export const Container = styled.button`
  outline: none;
  border: 1px solid ${(props) => props.border || "#fff"};
  border-radius: 15px;
  padding: 10px 25px;
  font-family: "Bebas Neue";
  letter-spacing: 2px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #ff1a73;
  width: 200px;

  &:hover {
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
`;
