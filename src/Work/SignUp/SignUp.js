import React, { useState } from "react";
import "./SignUp.css";

export default function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    phone: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
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
        <button className="button-in-SignUp" onClick={submitHandler}>
          SignUp
        </button>
      </div>
    </form>
  );
}
