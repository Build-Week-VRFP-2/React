import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWIthAuth";
import { useHistory } from "react-router-dom";
import {loginFormSchema} from '../validation/formSchema';
import * as yup from 'yup';

const initialFormErrors = {
  username: '',
  password: '',
}

export const InvestorSignIn = () => {
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const [Icreds, setICreds] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    const name = e.target.name
    const value = e.target.value

    yup
      .reach(loginFormSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setICreds({
      ...Icreds,
      [name]: value,
    });
  };

  useEffect(() => {
    loginFormSchema.isValid(Icreds)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [Icreds])

  const submit = (e) => {
    e.preventDefault();
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
        {
          formErrors.username ? <p>{formErrors.username}</p> : null
        }
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
        {
          formErrors.password ? <p>{formErrors.password}</p> : null
        }
        <input
          className="f1"
          type="password"
          placeholder="password"
          name="password"
          value={Icreds.password}
          onChange={handleChanges}
        />
        <button disabled={Icreds.username === '' || Icreds.password === '' ? true : false}>submit</button>
      </form>
    </div>
  );
};
