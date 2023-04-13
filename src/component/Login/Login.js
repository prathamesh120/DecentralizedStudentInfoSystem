import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";


import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ email: "pra", password: "123" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.email === email);
    if (account && account.password === password) {
      const data = [{ email, password }];
      let ak={
        email,
        password
      }
      setauthenticated(true);
      localStorage.setItem("authenticated", JSON.stringify(ak));
      navigate("/Dashboard", { data });
    } else {
      alert("Wrong Password or email! Enter right password and email.");
    }
  };
  return (
    <div className="LoginForm">
      <form action="" onSubmit={handleSubmit} id="Lform">
        <div>
          <p>
            <label htmlFor="email">Email </label>

            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <p>
            <label htmlFor="password">Password</label>

            <input
              type="text"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
        </div>
        <br></br>
        <br />
        <br />
        <br />
        <button type="submit" id="button">
          Login
        </button>
        <h2>or</h2>
      </form>
      <Link to="/CreateNewUser">
       <button id="button"> Register As new Student</button>
      </Link>
    </div>
  );
};
