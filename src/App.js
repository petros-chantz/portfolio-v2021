import "./helpers/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import { Container } from "./Components/Containers";
import Weather from "./api/Weather";

export default function App(props) {
  return (
    <Router>
      <Container>
        {/* <Navbar
          handleThemeChange={props.handleThemeChange}
          colorTheme={props.colorTheme}
        />
        <Home /> */}
        <Weather />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </Container>
    </Router>
  );
}
