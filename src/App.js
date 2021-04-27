import "./styles/App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar.js";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills/Skills";
import Experience from "./Pages/Experience/Experience";
import Projects from "./Pages/Projects/Projects";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <Skills />
      <Experience />
      <Projects />
    </Router>
  );
}
