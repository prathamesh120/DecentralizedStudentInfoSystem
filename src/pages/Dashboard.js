import React, { useEffect } from "react";
import "./Dashboard.css";
import { Logout } from "../component/nav/Logout";
import { Setting } from "../component/nav/Setting";
import { Route, Routes, Link, Switch, BrowserRouter } from "react-router-dom";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../component/Header/Header";

export const Dashboard = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated) {
  } else {
    return (
      <>
        <Header />

        <div className="Dashboard">
          <div id="Dash">
            <Link to="/logout">
              <button>Logout</button>
            </Link>
            
            <Link to="/settings">
              <button>Settings</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
};
