import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #000;
`;

export const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  height: 500px;
  width: 400px;
`;

export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 15px 15px 0px;
  background-color: #ff1a73;
  gap: 2rem;
  height: 500px;
  width: 400px;

  h1,
  p {
    color: #fff;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  flex-wrap: wrap;
  gap: 5px;
`;
