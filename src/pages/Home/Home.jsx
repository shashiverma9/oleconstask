import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <h1>{t("HOME_TITLE")}</h1>
      <div className="content-wrapper">
        <p>{t("HOME_CONTENT")}</p>
      </div>
    </div>
  );
};

export default Home;
