import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar";

function Routes(props) {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" render={props => <Login {...props} />} />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route path="/registration" render={props => <Signup {...props} />} />
          <Route path="/game" render={props => <Main {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
