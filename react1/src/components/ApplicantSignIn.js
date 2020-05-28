import React, { useState } from "react";
import Axios from "axios";
import { axiosWithAuth } from "../utils/axiosWIthAuth";

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

  const submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/applicant/register", Acreds)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <form onSubmit={submit}>
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
