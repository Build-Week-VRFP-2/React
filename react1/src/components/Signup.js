import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styling/Signup.css";

export const Signup = () => {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });
  const handleChanges = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signup">
      <div>
        <ul className='links'>
          <li>
            <Link to="/signup/investor">investor</Link>
            <Link to="/signup/applicant">applicant</Link>
          </li>
        </ul>
      </div>

      <form>
        <input
          className="f2"
          type="text"
          placeholder="username"
          name="username"
          value={creds.username}
          onChange={handleChanges}
        />
        <br />
        <br />
        <input
          className="f1"
          type="password"
          placeholder="password"
          name="password"
          value={creds.password}
          onChange={handleChanges}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
