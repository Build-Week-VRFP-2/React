import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWIthAuth";
import {loginFormSchema} from '../validation/formSchema';
import * as yup from 'yup';

const initialFormErrors = {
  username: '',
  password: '',
}

export const ApplicantSignIn = () => {
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const [Acreds, setACreds] = useState({
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
    setACreds({
      ...Acreds,
      [name]: value,
    });
  };

  useEffect(() => {
    loginFormSchema.isValid(Acreds)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [Acreds])

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
        {
          formErrors.username ? <p>{formErrors.username}</p> : null
        }
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
        {
          formErrors.password ? <p>{formErrors.password}</p> : null
        }
        <input
          className="f1"
          type="password"
          placeholder="password"
          name="password"
          value={Acreds.password}
          onChange={handleChanges}
        />
        <button disabled={Acreds.username === '' || Acreds.password === '' ? true : false}>submit</button>
      </form>
    </div>
  );
};
