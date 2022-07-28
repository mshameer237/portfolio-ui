import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { useNavigate } from "react-router-dom";

import ProjectAnimation from "animations/ProjectAnimation";
import { GoChevronDown } from "react-icons/go";

import {
  AnimationContainer,
  Section,
  PageName,
  ProjectListContainer,
  MobNav,
} from "assets/styles/main.styles";
import ProjectList from "./components/ProjectList";

const Projects = () => {
  const navigate = useNavigate();
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
            <Col col xl={9} md={9} xs={12} xxl={9}>
              <ProjectListContainer>
                <motion.div
                  animate={{ y: [-50, 0], opacity: [0, 0.5, 1] }}
                  initial="hidden"
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <ProjectList />
                </motion.div>
              </ProjectListContainer>
              <MobNav onClick={() => navigate("/about")}>
                <motion.div
                  animate={{ y: [4, 2, 4], opacity: [0.5, 0.8, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  initial="hidden"
                >
                  <GoChevronDown color="#fff" size={24} />
                </motion.div>
              </MobNav>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

export default Projects;
