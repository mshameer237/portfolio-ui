import styled from "styled-components";

export const Section = styled.div`
  margin: 0;
`;

export const MainTitleBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  padding: ${(props) => (props.noPadding ? "0 20px" : "0 10px")};
`;

export const MainTitle = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: #ffffff;
  display: block;
  margin-bottom: 20px;
  span {
    font-size: 24px;
    font-weight: 100;
  }
  div {
    opacity: 0;
  }
`;

export const MailPhoneBlock = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const MailPhone = styled.a`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  svg {
    font-size: 22px;
    margin-right: 20px;
    opacity: 0.4;
    transition: 0.3s all ease-in-out;
  }
  &:hover {
    svg {
      opacity: 1;
      transition: 0.3s all ease-in-out;
    }
  }
`;

export const AnimationContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.alignBottom ? "calc(100vh - 59px)" : "")};
  display: ${(props) => (props.alignBottom ? "flex" : "")};
  justify-content: ${(props) => (props.alignBottom ? "flex-end" : "")};
  align-items: ${(props) => (props.alignBottom ? "flex-end" : "")};
  svg {
    width: ${(props) => (props.w70 ? "70%" : "100%")};
  }
  > div {
    opacity: 0;
  }
  .__react_component_tooltip {
    opacity: 1 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background: #111 !important ;

    &::after {
      display: none;
    }
  }
`;

export const TimelineCard = styled.div`
  background: rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 30px 40px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
`;

export const SummaryList = styled.ul`
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
  margin-top: 20px;
`;

export const SummaryListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  list-style: none;
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
  color: #fff;
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    background: ${(props) => (props.isLight ? "#fff" : "#fff")};
    display: inline-block;
    position: absolute;
    left: 0;
    top: 6px;
  }
`;

export const KeywordsBadge = styled.li`
  background: ${(props) =>
    props.isLight ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.2)"};
  color: ${(props) =>
    props.isLight ? "rgba(255, 255, 255, 0.8)" : "#rgba(255, 255, 255, 0.8)"};
  margin-right: 10px;
  border-radius: 100px;
  list-style: none;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;
`;

export const KeywordsText = styled.ul`
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0;
  margin-top: 15px;
  color: #fff;
`;
export const JobTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 0;
  color: #fff;
`;

export const CompanyText = styled.h4`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;
  margin-top: 0;
  color: #fff;
  font-style: italic;
`;

export const PageName = styled.div`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 4px;
  color: #fff;
  margin-bottom: -74px;
  margin-top: 43px;
  > div {
    opacity: 0;
  }
`;

export const TimeLineBlock = styled.div`
  > div {
    opacity: 0;
  }
`;
