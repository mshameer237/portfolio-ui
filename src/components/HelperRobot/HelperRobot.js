import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Helper from "animations/Helper";

import { HelperContainer, HelperWithInfo, Info } from "./helper.styles";

const HelperRobot = () => {
  const [visible, setVisible] = useState(true);

  const handleVisibility = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 7000);
  };

  useEffect(() => {
    handleVisibility();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 630 }}
          animate={{ y: [630, 330] }}
          exit={{ y: [330, 630] }}
          transition={{ duration: 1, delay: 5 }}
        >
          <HelperContainer>
            <HelperWithInfo>
              <Helper />
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                initial="hidden"
                transition={{ duration: 6, delay: 6 }}
              >
                <Info>Hover on image or scroll.</Info>
              </motion.div>
            </HelperWithInfo>
          </HelperContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelperRobot;
