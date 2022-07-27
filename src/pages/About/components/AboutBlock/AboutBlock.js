import React from "react";
// import { motion } from "framer-motion";

import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import {
  AboutContainer,
  BodyText,
  SectionTitle,
  MailPhoneBlock,
  MailPhone,
} from "assets/styles/main.styles";

const AboutBlock = () => {
  return (
    <AboutContainer>
      <SectionTitle>I am..</SectionTitle>
      <BodyText>
        A creative and self-driven professional with 6+ years of experience in
        design, development and management of complex web applications. I have
        exposure to both design and the development aspect of the industry,
        which gave me an experience in UX and UI Designing and made me
        proficient in HTML, CSS, JavaScript, React.js and Next.js.
      </BodyText>
      <BodyText>
        Educationally, I am an engineering professional with a Master’s degree
        focused in Computer Application (MCA) from University of Calicut.
      </BodyText>
      <SectionTitle>Reach me..</SectionTitle>
      <MailPhoneBlock>
        <MailPhone href="mailto: mshameer237@gmail.com">
          <MdAlternateEmail />
        </MailPhone>

        <MailPhone href="https://www.linkedin.com/in/shameerm/" target="_blank">
          <FaLinkedinIn />
        </MailPhone>
      </MailPhoneBlock>
    </AboutContainer>
  );
};

export default AboutBlock;
