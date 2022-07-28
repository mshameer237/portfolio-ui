import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 769px) {
    padding: 15px 15px;
  }
`;

export const GoToHome = styled.div`
  cursor: pointer;
`;

export const PageName = styled.div`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 4px;
  color: #fff;
  > div {
    opacity: 0;
  }
`;
