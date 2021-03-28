import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
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
                to="/tache/"
              >
                Taches
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
            <li className="navbar__login">Deconnexion</li>
          </ul>
        </div>
      ) : (
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
      )}
    </nav>
  );
};

export default NavBar;
