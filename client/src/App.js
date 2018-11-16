import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import NoMatch from "./components/NoMatch";
import Nav from "./components/Header";
import './App.css'


const App = () => ( 
  <Router>
    <div>
      <Nav/>
      <br/><br/><br/><br/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
