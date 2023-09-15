import React from "react";
import Select from "../Select/Select";
import i18next from "i18next";
import { Link } from "react-router-dom";

const LangOptions = [
  { label: "EN", value: "en" },
  { label: "HI", value: "hi" },
];

const Header = (props) => {
  
  const onLangChange = (e) => {
    const { value } = LangOptions[e];
    i18next.changeLanguage(value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo"> Replit</Link>
        </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="navbar-item">
        <Link to="/about">About</Link>
        </li>
        <li className="navbar-item dropdown">
          <Select
            options={LangOptions}
            selectedValue={{ label: "ENG", value: "en" }}
            onChange={onLangChange}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
