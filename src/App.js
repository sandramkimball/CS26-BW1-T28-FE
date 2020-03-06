import React from "react";
import Nav from './components/Nav'
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes />
    </div>
  );
}

export default App;
