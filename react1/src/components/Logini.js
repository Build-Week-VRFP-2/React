import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWIthAuth";
import { useHistory } from "react-router-dom";

export const LoginI = () => {
  const [Lcreds, setLCreds] = useState({
    username: "",
    password: "",
    error: "",
  });

  const handleChanges = (e) => {
    setLCreds({
      ...Lcreds,
      [e.target.name]: e.target.value,
    });
  };

  let history = useHistory();

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/investor/login", Lcreds)
      .then((res) => {
        console.log(res.status);
        localStorage.setItem("token", JSON.stringify(res.data.token));
      })
      .catch (err => {
         if (err){
          setLCreds({...Lcreds, error: "Invalid email or password"})
        }
      })
  };

  return (
    <div>
      <form onSubmit={login}>
        {
          Lcreds.error ? <p>{Lcreds.error}</p> : null
        }
        <input
          className="f2"
          type="text"
          placeholder="username"
          name="username"
          value={Lcreds.username}
          onChange={handleChanges}
          required
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
          required
        />
        <button>submit</button>
      </form>
    </div>
  );
};
