import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { useNavigate } from "react-router-dom";

import SkillAnimation from "animations/SkillAnimation";

import SkillBlock from "./components/SkillBlock";

import HTMLIcon from "assets/images/skills/html.svg";
import CSSIcon from "assets/images/skills/css.svg";
import JSIcon from "assets/images/skills/js.svg";
import ReactIcon from "assets/images/skills/react.svg";
import NextIcon from "assets/images/skills/next.svg";
import VueIcon from "assets/images/skills/vue.svg";
import StorybookIcon from "assets/images/skills/storybook.svg";
import jqueryIcon from "assets/images/skills/jq.svg";
import SassIcon from "assets/images/skills/sass.svg";
import StrapiIcon from "assets/images/skills/strapi.svg";
import MuiIcon from "assets/images/skills/mui.svg";
import BootIcon from "assets/images/skills/bootstrap.svg";
import GitIcon from "assets/images/skills/git.svg";
import AdobeIcon from "assets/images/skills/xd.svg";
import AxureIcon from "assets/images/skills/axure.svg";
import SletchIcon from "assets/images/skills/sketch.svg";
import { GoChevronDown } from "react-icons/go";

import {
  AnimationContainer,
  Section,
  PageName,
  MobNav,
} from "assets/styles/main.styles";

const SKILL_LIST = [
  {
    icon: HTMLIcon,
    name: "HTML",
    level: 100,
  },
  {
    icon: CSSIcon,
    name: "CSS",
    level: 100,
  },
  {
    icon: JSIcon,
    name: "JavaScript",
    level: 80,
  },
  {
    icon: ReactIcon,
    name: "React",
    level: 95,
  },
  {
    icon: NextIcon,
    name: "Next",
    level: 90,
  },
  {
    icon: VueIcon,
    name: "Vue",
    level: 50,
  },
  {
    icon: StorybookIcon,
    name: "Storybook",
    level: 90,
  },
  {
    icon: jqueryIcon,
    name: "jQuery",
    level: 80,
  },
  {
    icon: SassIcon,
    name: "Sass",
    level: 100,
  },
  {
    icon: StrapiIcon,
    name: "Strapi",
    level: 60,
  },
  {
    icon: MuiIcon,
    name: "Material UI",
    level: 98,
  },
  {
    icon: BootIcon,
    name: "Bootstrap",
    level: 100,
  },
  {
    icon: GitIcon,
    name: "Git",
    level: 80,
  },
  {
    icon: AdobeIcon,
    name: "Adobe XD",
    level: 80,
  },
  {
    icon: AxureIcon,
    name: "Axure RP",
    level: 80,
  },
  {
    icon: SletchIcon,
    name: "Sketch",
    level: 80,
  },
];

const Skills = () => {
  const navigate = useNavigate();
  return (
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
          <Col col xl={9} md={9} xs={12} xxl={9}>
            <motion.div
              animate={{ y: [-50, 0], opacity: [0, 0.5, 1] }}
              initial="hidden"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <SkillBlock data={SKILL_LIST} />
            </motion.div>
            <MobNav onClick={() => navigate("/projects")}>
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
  );
};

export default Skills;
