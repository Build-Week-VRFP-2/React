import React, { useState } from "react";
import "../styling/Login.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Login = () => {
  const [Lcreds, setLCreds] = useState({
    username: "",
    password: "",
  });
  const handleChanges = (e) => {
    setLCreds({
      ...Lcreds,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="logins">
      <form>
        <input
          className="f2"
          type="text"
          placeholder="username"
          name="username"
          value={Lcreds.username}
          onChange={handleChanges}
        />
        <br />
        <br />
        <input
          className="f1"
          type="text"
          placeholder="password"
          name="password"
          value={Lcreds.password}
          onChange={handleChanges}
        />
        <button>SUBMIT</button>
        <span> Don't have an account?</span> <Link className='Log' to="/signup">sign up here</Link>
      </form>
    </div>
  );
};
