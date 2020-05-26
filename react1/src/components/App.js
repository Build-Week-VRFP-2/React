import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import '../styling/App.css';
import { Login } from '../components/LoginForm';
import { Signup } from '../components/SignupForm';
// import loginFormSchema from '../validation/loginFormSchema';
// import signupFormSchema from '../validation/signupFormSchema';
import axios from 'axios';
import * as yup from 'yup';

function App() {

  return (
    <div className="App">
      <Login />
      <Signup />
    </div>
  );
}

export default App;
