import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "layout/MainLayout";

import { Home, Experience, Skills, About, Projects } from "pages";

import PageAnimation from "transition/PageAnimation";
import MouseDirection from "hooks/MouseDirection";

function App() {
  const location = useLocation();
  console.log(location.pathname, "color");
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <PageAnimation
          color={
            location.pathname === "/home"
              ? "#222222"
              : location.pathname === "/experience"
              ? "#196F3D"
              : location.pathname === "/skills"
              ? "#1A5276"
              : location.pathname === "/projects"
              ? "#5B2C6F"
              : location.pathname === "/about"
              ? "#212F3C"
              : "#222"
          }
        >
          <MouseDirection>
            <Routes key={location.pathname} location={location}>
              <Route element={<MainLayout />}>
                <Route path="/" exact element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
              </Route>
            </Routes>
          </MouseDirection>
        </PageAnimation>
      </AnimatePresence>
    </div>
  );
}

export default App;
