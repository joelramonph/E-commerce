import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/style.css"

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <h1 className="header__logo">e-commerce</h1>
      </NavLink>

      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/login"
            >
              <i className="fa-solid fa-user header__icon"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/purchases"
            >
              <i className="fa-solid fa-store header__icon"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <h2 className="header__link"><i className="fa-solid fa-cart-shopping header__icon"></i></h2>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
