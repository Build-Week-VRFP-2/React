import React, { useState } from "react";
import Axios from "axios";
import { axiosWithAuth } from "../utils/axiosWIthAuth";
import { useHistory } from "react-router-dom";

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



  const submit = (e) => {
    e.preventDefault();
    console.log('investor creds', Icreds)

    axiosWithAuth()
      .post("/api/auth/investor/register", Icreds)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
      

  };

  return (
    <div>
      <form onSubmit={submit}>
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
