import React, { useState } from "react";
import axios from "axios";
import SignUp from "./SignUp";
import "./SignUp.css";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin456",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = async (details) => {
    const data = JSON.stringify(details);
    const mainItem = await axios({
      method: "POST",
      url: "https://evening-cliffs-38545.herokuapp.com/api/user",
      data,
    });
    console.log("details", details);
    console.log("mainitem", mainItem);
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App-login">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <SignUp Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
