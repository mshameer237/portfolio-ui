import styled from "styled-components";

export const TabIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #689f38;
  border: 2px solid #fff;
  height: 36px;
  width: 36px;
  margin: auto;
  border-radius: 50%;
  margin-bottom: 10px;
  color: #fff;
`;

export const TimelineContainer = styled.div`
  .tab-list {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &:last-child {
      &::after {
        display: none;
      }
    }
    &::after {
      content: "";
      position: absolute;
      top: 38px;
      height: 2px;
      width: 90%;
      left: 58px;
      background: #fff;
      z-index: 1;
    }
  }
  .tab {
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    z-index: 2;
    &.react-tabs__tab--selected {
      ${TabIcon} {
        background-color: #fff;
        border: 2px solid transparent;
        color: #689f38;
      }
    }
  }
  .tab-panel {
    margin-top: 20px;
  }
`;
