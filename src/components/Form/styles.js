import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    gap: 2rem;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  align-self: center;
  width: 400px;
  height: 15px;
  border: 1px solid #000;
  border-radius: 15px;
  background-color: #fff;

  div {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 33.3%;
    height: 100%;
    border-radius: 15px;
    background-color: #66bfbf;
    transition: width linear 0.3s;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
`;
