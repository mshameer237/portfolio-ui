import React from "react";
import { Line } from "rc-progress";

const SkillBlock = () => {
  return (
    <div>
      <Line percent={30} strokeWidth={1} strokeColor="red" />
    </div>
  );
};

export default SkillBlock;
