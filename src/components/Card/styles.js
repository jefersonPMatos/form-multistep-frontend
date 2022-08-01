import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 500px;
  width: 800px;
  /* border: 1px solid rgba(255, 255, 255, 0.5); */
  border-radius: 15px;
  flex-direction: ${(props) => props.fd};
  gap: ${(props) => props.gap};

  box-shadow: 0 9px 20px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 9px 20px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 9px 20px rgba(0, 0, 0, 0.5);
`;
