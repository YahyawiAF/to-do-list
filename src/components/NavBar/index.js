import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";

import { TokenContext } from "../../context";

import "./style.scss";

const NavBar = ({ auth }) => {
  const [activeLink, setActiveLink] = useState("");
  const [token, setToken] = useContext(TokenContext);
  return (
    <nav className="navbar">
      <div className="navbar__header">
        <h4>
          ToDo <span>Liste</span>
        </h4>
      </div>
      {auth ? (
        <div className="navbar__container">
          <ul>
            <li>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#1976fd",
                }}
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#1976fd",
                }}
                to="/list"
              >
                Liste
              </NavLink>
            </li>
            <li className="navbar__login">
              <Button
                theme="login-btn"
                content="Deconnexion"
                onClick={() => setToken(false)}
              />
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar__container">
          <ul>
            <li>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#1976fd",
                }}
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
