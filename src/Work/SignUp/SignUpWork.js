import React, { useState } from "react";
import SignUp from "./SignUp";
import "./SignUp.css";

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
    <div className="App-login">
      <SignUp error={error} setDetails={setDetails} details={details} />
    </div>
  );
}

export default SignUpWork;
