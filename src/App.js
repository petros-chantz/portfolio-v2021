import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Footer from "./Pages/Footer";
import { Container } from "./Components/Containers";

export default function App(props) {
  return (
    <Router>
      <Container>
        <Navbar
          handleThemeChange={props.handleThemeChange}
          colorTheme={props.colorTheme}
          padding={props.padding}
        />
        <Home padding={props.padding} />
        <Skills padding={props.padding} />
        <Experience padding={props.padding} />
        <Projects padding={props.padding} />
        <Footer padding={props.padding} />
      </Container>
    </Router>
  );
}
