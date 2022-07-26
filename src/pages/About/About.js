import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "styled-bootstrap-grid";

import AboutAnimation from "animations/AboutAnimation";

import {
  AnimationContainer,
  Section,
  PageName,
} from "assets/styles/main.styles";

const About = () => {
  return (
    <div>
      <Section>
        <Container fluid>
          <Row>
            <Col col={3}>
              <PageName>
                <motion.div
                  animate={{ x: [-50, 0], opacity: [0, 0.5, 1] }}
                  transition={{ delay: 0, duration: 1 }}
                  initial="hidden"
                >
                  About Me
                </motion.div>
              </PageName>
              <AnimationContainer alignBottom>
                <motion.div
                  animate={{ x: 0, opacity: [0, 0.5, 1] }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  initial="hidden"
                >
                  <AboutAnimation />
                </motion.div>
              </AnimationContainer>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

export default About;
