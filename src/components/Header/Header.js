import React from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";

import { HeaderContainer, GoToHome } from "./header.styles";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/home" ? null : (
        <HeaderContainer>
          <GoToHome onClick={() => navigate("/home")}>
            <GoHome color="#fff" size={30} />
          </GoToHome>
        </HeaderContainer>
      )}
    </>
  );
};

export default Header;
