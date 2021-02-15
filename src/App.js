import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <div>
      <Navbar/>
      
      <h1>Hello StackBlitz!</h1>
      <p>
        <h3>{t("Thanks.1")}</h3> <h3>{t("Why.1")}</h3>
      </p>
      <Footer />
    </div>
  );
}
