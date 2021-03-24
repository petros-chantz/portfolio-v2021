import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import NavBar from "./Components/NavBar";
import DevPortfolio from './Components/Dev/DevPortfolio';

export default function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/dev-portfolio">
        <DevPortfolio/>
      </Route>
    </Router>
  );
}


