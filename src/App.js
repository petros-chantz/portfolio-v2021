import "./helpers/App.css";
import { BrowserRouter as Router } from "react-router-dom";

export default function App(props) {
  return (
    <Router>
      <Container>
        <Navbar
          handleThemeChange={props.handleThemeChange}
          colorTheme={props.colorTheme}
        />
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </Container>
    </Router>
  );
}
