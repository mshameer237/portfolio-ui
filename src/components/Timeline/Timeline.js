import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { TimelineContainer, TabIcon } from "./timeline.styles";

const Timeline = ({ tabs, tabsContent }) => {
  return (
    <TimelineContainer>
      <Tabs className="tabs">
        <TabList className="tab-list">
          {tabs.map((item) => (
            <Tab className="tab">
              <TabIcon>{item.icon}</TabIcon>
              {item.title}
            </Tab>
          ))}
        </TabList>
        {tabsContent.map((item) => (
          <TabPanel className="tab-panel">{item.content}</TabPanel>
        ))}
      </Tabs>
    </TimelineContainer>
  );
};

export default Timeline;
