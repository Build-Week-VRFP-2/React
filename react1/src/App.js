import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Nav } from "./components/Nav";


import { InvestorSignIn } from "./components/InvestorSignIn";
import { ApplicantSignIn } from "./components/ApplicantSignIn";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signup/investor" component={InvestorSignIn} />
        <Route path="/signup/applicant" component={ApplicantSignIn} />







        {/* <Route
          path="/signup"
          render={(props) => (
            <div>
              <Signup />
              <Test />
            </div>
          )}
        /> */}
        )} />
      </Switch>
    </div>
  );
}

export default App;
