import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "styled-bootstrap-grid";

import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import {
  Section,
  MainTitleBlock,
  MainTitle,
  MailPhoneBlock,
  MailPhone,
  AnimationContainer,
} from "assets/styles/main.styles";
import HomeAnimation from "animations/HomeAnimation";

const Home = () => {
  return (
    <Section>
      <Container fluid>
        <Row>
          <Col col={6}>
            <MainTitleBlock>
              <MainTitle>
                <motion.div
                  animate={{ x: [-100, 0], opacity: [0, 0.5, 1] }}
                  initial="hidden"
                  transition={{ duration: 0.5 }}
                >
                  Hi !
                </motion.div>
              </MainTitle>
              <MainTitle>
                <motion.div
                  animate={{ x: [-80, 0], opacity: [0, 0.5, 1] }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  initial="hidden"
                >
                  <span>I am</span> Shameer
                </motion.div>
              </MainTitle>
              <MainTitle>
                <motion.div
                  animate={{ x: [-80, 0], opacity: [0, 0.5, 1] }}
                  transition={{ delay: 1, duration: 0.5 }}
                  initial="hidden"
                >
                  <span>I am an</span> User Interface Engineer
                </motion.div>
              </MainTitle>
              <MailPhoneBlock>
                <motion.div
                  animate={{ y: [50, 0], opacity: [0, 0.5, 1] }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  initial="hidden"
                >
                  <MailPhone href="mailto: mshameer237@gmail.com">
                    <MdAlternateEmail />
                  </MailPhone>
                </motion.div>
                <motion.div
                  animate={{ y: [50, 0], opacity: [0, 0.5, 1] }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  initial="hidden"
                >
                  <MailPhone
                    href="https://www.linkedin.com/in/shameerm/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </MailPhone>
                </motion.div>
              </MailPhoneBlock>
            </MainTitleBlock>
          </Col>
          <Col col={6}>
            <MainTitleBlock noPadding>
              <AnimationContainer>
                <motion.div
                  animate={{ x: 0, opacity: [0, 0.5, 1] }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  initial="hidden"
                >
                  <HomeAnimation />
                </motion.div>
              </AnimationContainer>
            </MainTitleBlock>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Home;
