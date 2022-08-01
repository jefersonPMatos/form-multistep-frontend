import styled from "styled-components";

const Container = styled.div`
  line-height: 0;
  display: flex;
  margin: 5px;
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 50%;
  height: ${(props) => props.sz || "70px"};
  width: ${(props) => props.sz || "70px"};
  background: cover;
`;

const Img = styled.img`
  height: ${(props) => props.sz || "70px"};
  width: ${(props) => props.sz || "70px"};
  border-radius: 50%;
`;

export { Container, Img };
