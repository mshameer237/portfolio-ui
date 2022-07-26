import React from "react";
import { motion } from "framer-motion";
// import "react-tabs/style/react-tabs.css";

import { Timeline } from "components";
import { IoBusinessOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";

import {
  TimelineCard,
  SummaryList,
  SummaryListItem,
  KeywordsBadge,
  KeywordsText,
  JobTitle,
  CompanyText,
  TimeLineBlock,
} from "assets/styles/main.styles";

const tabs = [
  {
    title: "2016-present",
    icon: <IoBusinessOutline size={16} />,
  },
  {
    title: "2015-2016",
    icon: <IoBusinessOutline size={16} />,
  },
  {
    title: "2012-2015",
    icon: <IoSchoolOutline size={18} />,
  },
  {
    title: "2009-2012",
    icon: <IoSchoolOutline size={18} />,
  },
];

const tabsContent = [
  {
    content: (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <TimelineCard>
          <JobTitle>UI Lead</JobTitle>
          <CompanyText>
            Neointeraction Designs, Bangalore, India | 2016- present
          </CompanyText>
          <KeywordsText>
            <KeywordsBadge>UI Development</KeywordsBadge>
            <KeywordsBadge>UX Design</KeywordsBadge>
            <KeywordsBadge>Visual Design</KeywordsBadge>
            <KeywordsBadge>Team Leading</KeywordsBadge>
          </KeywordsText>
          <SummaryList>
            <SummaryListItem>
              Used Component Driven Development (CDD) approach to develop and
              maintain complex web components using React.js and StoryBook.js.
            </SummaryListItem>
            <SummaryListItem>
              Developed fully functional responsive applications using HTML5,
              CSS3, jQuery & JavaScript while taking advantage of preprocessors
              like SASS and JavaScript frameworks like React.js & Next.js. and
              deployed web applications with headless CMS using strapi. Also
              performed cross-browser testing, debugging, website maintenance
              and enhancements.
            </SummaryListItem>
            <SummaryListItem>
              Worked onsite as UI Developer for Traveloka, a reputed company in
              Indonesia, where I developed mobile app UI components using
              React-Native & StoryBook.js.
            </SummaryListItem>
            <SummaryListItem>
              Worked onsite as UI Engineer for Intertrust Group, where I
              developed UI for Micro-Frontend apps using React-Typescript,
              styled-components & StoryBook.js.
            </SummaryListItem>
          </SummaryList>
        </TimelineCard>
      </motion.div>
    ),
  },
  {
    content: (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <TimelineCard>
          <JobTitle>Web Developer</JobTitle>
          <CompanyText>Freelance, Kerala, India</CompanyText>
          <KeywordsText>
            <KeywordsBadge isLight>UI Development</KeywordsBadge>
            <KeywordsBadge isLight>UX Design</KeywordsBadge>
            <KeywordsBadge isLight>HTML</KeywordsBadge>
            <KeywordsBadge isLight>CSS</KeywordsBadge>
            <KeywordsBadge isLight>jQuery</KeywordsBadge>
          </KeywordsText>
          <SummaryList>
            <SummaryListItem isLight>
              Designed and developed fully functional responsive websites for
              clients using HTML, CSS, JQuery and PHP.
            </SummaryListItem>
            <SummaryListItem isLight>
              Performed cross-browser testing and debugging.
            </SummaryListItem>
            <SummaryListItem isLight>
              Performed website maintenance and enhancements.
            </SummaryListItem>
          </SummaryList>
        </TimelineCard>
      </motion.div>
    ),
  },
  {
    content: (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <TimelineCard>
          <JobTitle>Master of Computer Application</JobTitle>
          <CompanyText>Calicut University, India</CompanyText>
          <KeywordsText>
            <KeywordsBadge isLight>Java</KeywordsBadge>
            <KeywordsBadge isLight>C++</KeywordsBadge>
            <KeywordsBadge isLight>HTML</KeywordsBadge>
            <KeywordsBadge isLight>CSS</KeywordsBadge>
          </KeywordsText>
        </TimelineCard>
      </motion.div>
    ),
  },
  {
    content: (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <TimelineCard>
          <JobTitle>Bachelor of Computer Science</JobTitle>
          <CompanyText>Bharathiar University, India</CompanyText>
          <KeywordsText>
            <KeywordsBadge isLight>C Language</KeywordsBadge>
            <KeywordsBadge isLight>SQL</KeywordsBadge>
          </KeywordsText>
        </TimelineCard>
      </motion.div>
    ),
  },
];

const TimelineBlock = () => {
  return (
    <TimeLineBlock>
      <motion.div
        animate={{ opacity: [0, 0.5, 1] }}
        initial="hidden"
        transition={{ duration: 0.5 }}
      >
        <Timeline tabs={tabs} tabsContent={tabsContent} />
      </motion.div>
    </TimeLineBlock>
  );
};

export default TimelineBlock;
