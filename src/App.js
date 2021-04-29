import "./helpers/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { Container } from "./components/Container";
import Info from "./pages/Info";
import Map from "./pages/Map";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

export default function App(props) {
  return (
    <Router>
      <Container>
        <Navbar
          handleThemeChange={props.handleThemeChange}
          colorTheme={props.colorTheme}
        />
        <Info colorTheme={props.colorTheme} />
        <Map />
        <Skills />
        <Experience />
      </Container>
    </Router>
  );
}
