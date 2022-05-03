import React, { useState } from "react";
import SignUp from "./SignUp";
import { AppSignUp } from "./SignUp.style";
// import "./SignUp.css";

function SignUpWork() {
  const [details, setDetails] = useState({
    phone: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };

  return (
    <AppSignUp>
      <SignUp error={error} setDetails={setDetails} details={details} />
    </AppSignUp>
  );
}

export default SignUpWork;
