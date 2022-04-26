import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { ButtonUp } from "./SignUp.style";
export default function SignUp({ error, setDetails, details }) {
  return (
    <form>
      <div className="form-inner">
        <h2>SignUp</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Phone Number:</label>
          <input
            type="text"
            name="phone"
            id="name"
            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <ButtonUp
          className="button-in-signIn"
          onClick={async (e) => {
            e.preventDefault();
            const information = {
              email: details.email,
              password: details.password,
            };
            const SignInMainItem = await axios({
              method: "POST",
              url: "https://evening-cliffs-38545.herokuapp.com/api/user/login",
              data: information,
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
            });
            console.log(SignInMainItem.data.msg);
          }}
        >
          Sign In
        </ButtonUp>
        <ButtonUp
          className="button-in-SignUp"
          onClick={async (e) => {
            console.log("Henry Test");
            e.preventDefault();

            const signUpMainItem = await axios({
              method: "POST",
              url: "https://evening-cliffs-38545.herokuapp.com/api/user",
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
              data: details,
            });
          }}
        >
          SignUp
        </ButtonUp>
      </div>
    </form>
  );
}
