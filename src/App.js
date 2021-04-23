<<<<<<< HEAD
import "./styles/App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar.js";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills/Skills";
import Experience from "./Pages/Experience/Experience";
import Projects from "./Pages/Projects/Projects";
=======
import './styles/App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Footer from "./Pages/Footer";
import { Container } from './Components/Containers';
>>>>>>> f97b97b (Dark-Mode Layout Complete)

export default function App(props) {
  return (
    <Router>
      <Container>
              <Navbar handleThemeChange={props.handleThemeChange} colorTheme={props.colorTheme} />
      <Home />
      <Skills />
      <Experience />
      <Projects />
<<<<<<< HEAD
=======
      <Footer/>
        </Container>
>>>>>>> f97b97b (Dark-Mode Layout Complete)
    </Router>
  );
}
