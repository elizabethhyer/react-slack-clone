import React from "react";
import styled from "styled-components";

function Home() {
  return <Container>Select or create channel</Container>;
}

export default Home;

const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 5px;
  color: #350d36;
`;
