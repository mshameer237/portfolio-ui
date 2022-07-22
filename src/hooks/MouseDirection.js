import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MouseDirection = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const mouseDirection = React.useCallback(() => {
    window.addEventListener("wheel", function (event) {
      if (event.deltaY < 0) {
        console.log("scrolling up");
        navigate("/home");

        // location.pathname === "/home"
        //   ? navigate("/home")
        //   : location.pathname === "/exp"
        //   ? navigate("/home")
        //   : location.pathname === "/skills"
        //   ? navigate("/exp")
        //   : navigate("/skills");
      } else if (event.deltaY > 0) {
        console.log("scrolling down");
        location.pathname === "/home"
          ? navigate("/exp")
          : location.pathname === "/exp"
          ? navigate("/skills")
          : navigate("/skills");
      }
    });
  }, [location.pathname, navigate]);

  useEffect(() => {
    mouseDirection();
  }, [mouseDirection]);

  return <div>{children}</div>;
};

export default MouseDirection;
