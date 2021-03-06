import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import { Contact } from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import GoHome from "../GoHome/GoHome";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <GoHome />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
