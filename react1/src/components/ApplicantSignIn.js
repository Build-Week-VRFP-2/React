import React, { useState } from "react";
import "../styling/Signup.css";

export const ApplicantSignIn = () => {
  const [Acreds, setACreds] = useState({
    username: "",
    password: "",
  });
  const handleChanges = (e) => {
    setACreds({
      ...Acreds,
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
          value={Acreds.username}
          onChange={handleChanges}
        />
        <br />
        <br />
        <input
          className="f1"
          type="password"
          placeholder="password"
          name="password"
          value={Acreds.password}
          onChange={handleChanges}
        />
        <button>submit</button>
      </form>
    </div>
  );
};


