import styled from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  @media (max-width: 769px) {
    position: static;
    padding: 20px;
    text-align: center;
  }
`;

export const FooterText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`;
