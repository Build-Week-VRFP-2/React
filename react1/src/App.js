import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Nav } from "./components/Nav";
import PrivateRoute from './utils/PrivateRoute'
import DashBoard from './components/DashBoard';


function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path='/applicant/:id' component={DashBoard} />
          {/* <PrivateRoute exact path /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
