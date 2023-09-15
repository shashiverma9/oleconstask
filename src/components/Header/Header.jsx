import React from "react";
import Select from "../Select/Select";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";

const LangOptions = [
  { label: "EN", value: "en" },
  { label: "HI", value: "hi" },
];

const Header = (props) => {
  const { t } = useTranslation();

  const { options, selectedValue, onChange } = props;

  const renderOptions = () => {
    if (options && options.length <= 0) {
      return null;
    }
    return options.map((option, index) => {
      return (
        <option
          key={index}
          value={index}
          // onClick={(e) => console.log(e)}
          // value={selectedValue.value === option.value}
          className={`${
            selectedValue.value === option.value ? "selected" : ""
          }`}
        >
          {option.label}
        </option>
      );
    });
  };

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
