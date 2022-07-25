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
  padding: 0 60px;
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
  svg {
    width: 100%;
  }
  > div {
    opacity: 0;
  }
`;
