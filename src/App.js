<<<<<<< HEAD
import "./helpers/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { Container } from "./components/Container";
import Info from "./pages/Info";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
=======
import "./styles/App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar.js";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills/Skills";
import Experience from "./Pages/Experience/Experience";
import Projects from "./Pages/Projects/Projects";
>>>>>>> main

export default function App(props) {
  return (
    <Router>
<<<<<<< HEAD
      <Container>
        <Navbar
          handleThemeChange={props.handleThemeChange}
          colorTheme={props.colorTheme}
        />
        <Info colorTheme={props.colorTheme} />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </Container>
=======
      <NavBar />
      <Home />
      <Skills />
      <Experience />
      <Projects />
>>>>>>> main
    </Router>
  );
}
