import React from "react";
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import Login from "./authentication/Login";
import Signup from "./components/Signup/Signup";
import Main from "./components/Main/Main";

function Routes(props) {
  return (
    <div>
        <div className='NavBar'>
          <p href="./components/Signup/Signup.js" >Sign Up</p>
          <p href="./components/Main/Main.js">Game</p>
        </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route path="/registration" render={props => <Signup {...props} />} />
          <Route path="/game" render={props => <Main {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
