import React from "react";

// import "react-tabs/style/react-tabs.css";

import { Timeline } from "components";
import { IoBusinessOutline } from "react-icons/io5";

import {
  TimelineCard,
  SummaryList,
  SummaryListItem,
  KeywordsBadge,
  KeywordsText,
  JobTitle,
  CompanyText,
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
    icon: <IoBusinessOutline size={16} />,
  },
  {
    title: "2009-2012",
    icon: <IoBusinessOutline size={16} />,
  },
];

const tabsContent = [
  {
    content: (
      <TimelineCard>
        <JobTitle>UI Lead</JobTitle>
        <CompanyText>
          Neointeraction Designs, Bangalore, India | 2016- present
        </CompanyText>
        <KeywordsText>
          <KeywordsBadge>UI Dev</KeywordsBadge>
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
            performed cross-browser testing, debugging, website maintenance and
            enhancements.
          </SummaryListItem>
          <SummaryListItem>
            Worked onsite as UI Developer for Traveloka, a reputed company in
            Indonesia, where I developed mobile app UI components using
            React-Native & StoryBook.js.
          </SummaryListItem>
          <SummaryListItem>
            Worked onsite as UI Engineer for Intertrust Group, where I developed
            UI for Micro-Frontend apps using React-Typescript, styled-components
            & StoryBook.js.
          </SummaryListItem>
        </SummaryList>
      </TimelineCard>
    ),
  },
  {
    content: "",
  },
  {
    content: "",
  },
  {
    content: "",
  },
];

const TimelineBlock = () => {
  return (
    <div>
      <Timeline tabs={tabs} tabsContent={tabsContent} />
    </div>
  );
};

export default TimelineBlock;
