import React from "react";
import { Card } from "../../components/card";
import { Container } from "../../components/container";
import styled from "styled-components";
import SignUpForm from "./components/signup-form";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  min-height: 100vh;
`;

const CardStyles = styled(Card)`
  min-width: 300px;
`;

export default function RegisterPage() {
  return (
    <Container>
      <Content>
        <CardStyles>
          <h3>Nova conta</h3>
          <hr />
          <SignUpForm />
        </CardStyles>
      </Content>
    </Container>
  );
}
