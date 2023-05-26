import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/home">
              Home
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/calendar">
              Calendar
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/nutrition">
              Nutrition
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav nav-pills d-flex justify-content-end">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

function Header() {
    return (
        <>
        <header>
            <h1>Noted</h1>
        </header>
        <nav>
           {showNavigation()}
        </nav>
    </>
    )
}

export default Header;