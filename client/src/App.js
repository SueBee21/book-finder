// import logo from './logo.svg';
// import './App.css';

import React from "react";
import Home from "./pages/home";
import Saved from "./pages/saved";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron>
       <Header/>
      </Jumbotron>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    </div>

  );
}

export default App;
