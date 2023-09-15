import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <h1>{t("ABOUT_TITLE")}</h1>
      <div className="about-content-wrapper">
        <p>{t("ABOUT_CONTENT")}</p>
      </div>
      About
    </div>
  );
};

export default About;
