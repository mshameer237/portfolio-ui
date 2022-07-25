import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

import { Section } from "assets/styles/main.styles";

const Home = () => {
  return (
    <Section>
      <Container fluid>
        <Row>
          <Col col={6}>col 1</Col>
          <Col col={6}>col 2</Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Home;
