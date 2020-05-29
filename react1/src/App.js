import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Nav } from "./components/Nav";
import PrivateRoute from "./utils/PrivateRoute";
import DashBoard from "./components/DashBoard";
import SpecificProject from './components/SpecificProject'
import  UpdateForm  from "./components/UpdateForm";
import Projects from './components/Projects'
import AllProjects from "./components/AllProjects";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/applicant/:id" component={DashBoard} />
          <PrivateRoute path={`/user/:id/project/:itemid`} component={UpdateForm} />
          <PrivateRoute path={`/projects`} component={AllProjects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
