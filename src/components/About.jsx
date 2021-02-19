import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function About() {
  const { t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return <h1>{t("About.1")}</h1>;
}

export default About;
