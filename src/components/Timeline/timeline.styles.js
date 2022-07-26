import styled from "styled-components";

export const TabIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #196f3d;
  border: 2px solid rgba(0, 0, 0, 0.2);
  height: 40px;
  width: 40px;
  margin: auto;
  border-radius: 50%;
  margin-bottom: 10px;
  color: #fff;
  transition: 0.3s all ease-in-out;
  &:hover {
    border: 2px solid #fff;
    transition: 0.3s all ease-in-out;
  }
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
      background: rgba(0, 0, 0, 0.2);
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
    outline: none;
    &.react-tabs__tab--selected {
      ${TabIcon} {
        background-color: #fff;
        border: 2px solid transparent;
        color: #196f3d;
      }
    }
  }
  .tab-panel {
    margin-top: 20px;
  }
`;
