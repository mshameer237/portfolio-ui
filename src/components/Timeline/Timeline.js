import React from "react";
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { TimelineContainer, TabIcon } from "./timeline.styles";

const Timeline = ({ tabs, tabsContent }) => {
  return (
    <TimelineContainer>
      <motion.div
        animate={{ y: [-50, 0], opacity: [0, 0.5, 1] }}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.5 }}
      >
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
      </motion.div>
    </TimelineContainer>
  );
};

export default Timeline;
