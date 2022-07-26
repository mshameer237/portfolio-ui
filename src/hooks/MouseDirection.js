import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MouseDirection = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const debounce = function (fn, d) {
    let timer;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    };
  };

  const mouseDirection = React.useCallback(() => {
    window.addEventListener(
      "wheel",
      debounce(function (event) {
        if (event.deltaY < 0) {
          console.log(event.deltaY, "scrolling up");
          navigate("/home");
          location.pathname === "/about"
            ? navigate("/projects")
            : location.pathname === "/projects"
            ? navigate("/skills")
            : location.pathname === "/skills"
            ? navigate("/experience")
            : location.pathname === "/experience"
            ? navigate("/home")
            : navigate("/home");
        } else if (event.deltaY > 0) {
          console.log(event.deltaY, "scrolling down");
          location.pathname === "/home" || location.pathname === "/"
            ? navigate("/experience")
            : location.pathname === "/experience"
            ? navigate("/skills")
            : location.pathname === "/skills"
            ? navigate("/projects")
            : location.pathname === "/projects"
            ? navigate("/about")
            : location.pathname === "/about"
            ? navigate("/about")
            : navigate("/skills");
        }
      }, 300)
    );
  }, [location.pathname, navigate]);

  useEffect(() => {
    mouseDirection();
  }, [mouseDirection]);

  return <>{children}</>;
};

export default MouseDirection;
