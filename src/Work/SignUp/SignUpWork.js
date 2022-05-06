// import React, { useState } from "react";
import {
  AppSignUp,
  ButtonUp,
  FormInner,
  InformationBox,
  ButtonContainer,
} from "./SignUp.style";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { useStore, LightContext } from "../../store";
import { useContext } from "react";

function SignUpWork() {
  const {
    SignUpStore: { email, phone, password, updateData },
  } = useStore();

  const information = { email, password, phone };

  const LightTheme = useContext(LightContext);
  const Theme = {
    transition: "0.5s",
    background: LightTheme ? "#ffffff" : "#000",
    color: LightTheme ? "#000000" : "#fff",
  };
  const FormTheme = {
    transition: "0.5s",
    background: LightTheme ? "#007979" : "#C1FFE4",
    color: LightTheme ? "#fff" : "#000000",
  };

  return (
    <AppSignUp style={Theme}>
      <FormInner style={FormTheme}>
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
    </AppSignUp>
  );
}

export default observer(SignUpWork);
