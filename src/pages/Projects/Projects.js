import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "styled-bootstrap-grid";

import ProjectAnimation from "animations/ProjectAnimation";

import {
  AnimationContainer,
  Section,
  PageName,
} from "assets/styles/main.styles";

const Projects = () => {
  return (
    <div>
      <Section>
        <Container fluid className="container-custom">
          <Row>
            <Col col={3}>
              <PageName>
                <motion.div
                  animate={{ x: [-50, 0], opacity: [0, 0.5, 1] }}
                  transition={{ delay: 0, duration: 1 }}
                  initial="hidden"
                >
                  Projects
                </motion.div>
              </PageName>
              <AnimationContainer alignBottom>
                <motion.div
                  animate={{ x: 0, opacity: [0, 0.5, 1] }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  initial="hidden"
                >
                  <ProjectAnimation />
                </motion.div>
              </AnimationContainer>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

export default Projects;
