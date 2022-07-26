import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "styled-bootstrap-grid";

import ExperienceAnimation from "animations/ExperienceAnimation";
import TimelineBlock from "./components/TimelineBlock";

import {
  AnimationContainer,
  Section,
  PageName,
} from "assets/styles/main.styles";

const Experience = () => {
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
                  Experience
                </motion.div>
              </PageName>
              <AnimationContainer alignBottom w70>
                <motion.div
                  animate={{ x: 0, opacity: [0, 0.5, 1] }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  initial="hidden"
                >
                  <ExperienceAnimation />
                </motion.div>
              </AnimationContainer>
            </Col>
            <Col col={9}>
              <TimelineBlock />
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

export default Experience;
