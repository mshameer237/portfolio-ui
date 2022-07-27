import React from "react";

import { VscLayers } from "react-icons/vsc";

import {
  ProjectContainer,
  Project404,
  NoProjectTitle,
} from "assets/styles/main.styles";

const ProjectList = () => {
  return (
    <ProjectContainer>
      <Project404>
        <ddiv style={{ padding: "160px 0" }}>
          <VscLayers size={60} fill="rgba(255,255,255,0.3)" />
          <NoProjectTitle>No personal projects to display yet.</NoProjectTitle>
        </ddiv>
      </Project404>
    </ProjectContainer>
  );
};

export default ProjectList;
