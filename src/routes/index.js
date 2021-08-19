import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../component/Login";
import Register from "../component/Register";
import Profile from "../component/Profile/ProfileNav";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
