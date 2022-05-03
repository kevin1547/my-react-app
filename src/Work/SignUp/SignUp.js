import React, { useState } from "react";
// import "./SignUp.css";
import axios from "axios";
import {
  ButtonUp,
  FormInner,
  InformationBox,
  ButtonContainer,
} from "./SignUp.style";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";

function SignUp() {
  const {
    SignUpStore: { email, phone, password, updateData },
  } = useStore();
  console.log("text email>>", email);

  const information = { email, password, phone };
  return (
    <FormInner>
      <h2>SignUp</h2>
      <InformationBox>
        <div className="form-group">
          <label htmlFor="name">Phone Number:</label>
          <input
            type="text"
            name="phone"
            id="name"
            onChange={(e) => {
              updateData("phone", e.target.value);
            }}
            value={phone}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              updateData("email", e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              updateData("password", e.target.value);
            }}
            value={password}
          />
        </div>
      </InformationBox>
      <ButtonContainer>
        <ButtonUp
          className="button-in-signIn"
          onClick={async (e) => {
            e.preventDefault();
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
            e.preventDefault();

            const signUpMainItem = await axios({
              method: "POST",
              url: "https://evening-cliffs-38545.herokuapp.com/api/user",
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
              data: information,
            });
          }}
        >
          SignUp
        </ButtonUp>
      </ButtonContainer>
    </FormInner>
  );
}
export default observer(SignUp);
