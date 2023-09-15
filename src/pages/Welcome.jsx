import React from "react";
import { useTranslation } from "react-i18next";

const Welcome = () => {
    const {t}=useTranslation();
  return <div  className="main-page">{t('WELCOME_MESSAGE')}</div>;
};

export default Welcome;
