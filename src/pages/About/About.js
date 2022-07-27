import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "styled-bootstrap-grid";

import AboutAnimation from "animations/AboutAnimation";

import {
  AnimationContainer,
  Section,
  PageName,
  ProjectListContainer,
} from "assets/styles/main.styles";
import AboutBlock from "./components/AboutBlock";

const About = () => {
  return (
    <div>
      <Section>
        <Container fluid className="container-custom">
          <Row>
            <Col col xl={3} md={3} xs={12} xxl={3}>
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
            <Col col xl={9} md={9} xs={12} xxl={9}>
              <ProjectListContainer>
                <motion.div
                  animate={{ y: [-50, 0], opacity: [0, 0.5, 1] }}
                  initial="hidden"
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <AboutBlock />
                </motion.div>
              </ProjectListContainer>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

export default About;
