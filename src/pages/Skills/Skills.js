import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "styled-bootstrap-grid";

import SkillAnimation from "animations/SkillAnimation";

import {
  AnimationContainer,
  Section,
  PageName,
} from "assets/styles/main.styles";

const Skills = () => {
  return (
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
                Skills
              </motion.div>
            </PageName>
            <AnimationContainer alignBottom>
              <motion.div
                animate={{ x: 0, opacity: [0, 0.5, 1] }}
                transition={{ delay: 0.5, duration: 0.5 }}
                initial="hidden"
              >
                <SkillAnimation />
              </motion.div>
            </AnimationContainer>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Skills;
