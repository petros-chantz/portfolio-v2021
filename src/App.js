import "./helpers/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { ContainerApp } from "./components/Container";
import Info from "./pages/Info";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

export default function App(props) {
  return (
    <Router>
      <ContainerApp id="top">
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
    </Router>
  );
}
