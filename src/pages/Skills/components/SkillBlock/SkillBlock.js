import React from "react";
import { Row, Col } from "styled-bootstrap-grid";
import ProgressBar from "react-animated-progress-bar";

import {
  SkillCardContainer,
  SkillBlockContainer,
  SkillTitleBlock,
  SkillTitle,
  SkillImage,
  ImageBlock,
} from "assets/styles/main.styles";

const SkillBlock = ({ data }) => {
  return (
    <SkillCardContainer>
      <Row>
        {data.map((item) => (
          <Col col={4}>
            <SkillBlockContainer>
              <SkillTitleBlock>
                <ImageBlock>
                  <SkillImage src={item.icon} alt={item.icon} />
                </ImageBlock>
                <SkillTitle>{item.name}</SkillTitle>
              </SkillTitleBlock>
              <ProgressBar
                height="10px"
                rect
                fontColor="#1A5276"
                percentage={item.level}
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="#fff"
                trackBorderColor="#fff"
                defColor={{
                  fair: "rgba(255,255,255,0.5)",
                  good: "rgba(255,255,255,0.7)",
                  excellent: "#fff",
                  poor: "rgba(255,255,255,0.3)",
                }}
              />
            </SkillBlockContainer>
          </Col>
        ))}
      </Row>
    </SkillCardContainer>
  );
};

export default SkillBlock;
