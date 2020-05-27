import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styling/Signup.css";

export const Signup = () => {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const [investor, setInvestor] = useState(false);
  const [applicant, setApplicant] = useState(false);

  const handleChanges = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };


  const handleToggleI = e => {
    setApplicant(false)
    setInvestor(true)
  }

  const handleToggleA = e => {
    setInvestor(false)
    setApplicant(true)
  }


  return (
    <div className="signup">
      <div>
        <ul className="links">
          <li>
            <Link onClick={handleToggleI} className={investor ? 'toggleOn': 'toggleOff'} to="/signup/investor">investor</Link>
            <Link onClick={handleToggleA} className={applicant ? 'toggleOn': 'toggleOff'} to="/signup/applicant">applicant</Link>
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
