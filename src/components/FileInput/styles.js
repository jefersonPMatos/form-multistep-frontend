import styled from "styled-components";

const Label = styled.label`
  font-size: 16px;
  color: #e1e1e1;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
`;

const Input = styled.input`
  display: none;
`;

export { Label, Input };
