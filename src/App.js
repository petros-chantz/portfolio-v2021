import "./helpers/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { Container } from "./components/Container";
import Info from "./pages/Info";

export default function App(props) {
  return (
    <Router>
      <Container>
        <Navbar
          handleThemeChange={props.handleThemeChange}
          colorTheme={props.colorTheme}
        />
        <Info colorTheme={props.colorTheme} />
      </Container>
    </Router>
  );
}
