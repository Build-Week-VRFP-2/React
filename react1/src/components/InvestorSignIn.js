import React, { useState } from "react";
import "../styling/Signup.css";

export const InvestorSignIn = () => {
  const [Icreds, setICreds] = useState({
    username: "",
    password: "",
  });
  const handleChanges = (e) => {
    setICreds({
      ...Icreds,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signup">
      <form>
        <input
          className="f2"
          type="text"
          placeholder="username"
          name="username"
          value={Icreds.username}
          onChange={handleChanges}
        />
        <br />
        <br />
        <input
          className="f1"
          type="password"
          placeholder="password"
          name="password"
          value={Icreds.password}
          onChange={handleChanges}
        />
        <button>submit</button>
      </form>
    </div>
  );
};


