import React from "react";
import "./helpers/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { ContainerApp, Container } from "./components/Container";
import Info from "./pages/Info";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import { useSpring } from "react-spring";

export default function App(props) {
  const animatedStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 100,
  });
  return (
    <Router>
      <Container>
        <ContainerApp style={animatedStyle} id="top">
          <Navbar
            handleThemeChange={props.handleThemeChange}
            colorTheme={props.colorTheme}
          />
          <Info colorTheme={props.colorTheme} />
          <Skills />
          <Experience />
          <Projects colorTheme={props.colorTheme} />
          <Footer />
        </ContainerApp>
      </Container>
    </Router>
  );
}
