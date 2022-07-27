import styled from "styled-components";

export const HelperContainer = styled.div`
  position: fixed;
  left: 20px;
  bottom: 20px;
`;

export const HelperWithInfo = styled.div`
  position: relative;
`;

export const Info = styled.div`
  position: absolute;
  right: -230px;
  top: -26px;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  border-radius: 12px;
  white-space: nowrap;
`;
