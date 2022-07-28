import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { useNavigate } from "react-router-dom";

import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import {
  Section,
  MainTitleBlock,
  MainTitle,
  MailPhoneBlock,
  MailPhone,
  AnimationContainer,
  RobotContainer,
  MobNav,
} from "assets/styles/main.styles";
import HomeAnimation from "animations/HomeAnimation";
import HelperRobot from "components/HelperRobot";
import { GoChevronDown } from "react-icons/go";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <Container fluid className="container-custom">
        <Row>
          <Col col xl={6} md={6} xs={12} xxl={6}>
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
              <RobotContainer>
                <HelperRobot />
              </RobotContainer>
            </MainTitleBlock>
          </Col>
          <Col col xl={6} md={6} xs={12} xxl={6}>
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
            <motion.div
              animate={{ y: [5, 0, 5] }}
              transition={{ duration: 1, repeat: Infinity }}
              initial="hidden"
            >
              <MobNav onClick={() => navigate("/experience")}>
                <motion.div
                  animate={{ y: [5, 0, 5], opacity: [0.5, 0.8, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  initial="hidden"
                >
                  <GoChevronDown color="#fff" size={24} />
                </motion.div>
              </MobNav>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Home;
