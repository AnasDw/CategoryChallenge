import React from "react";
import "../css/index.css";
import "../css/homePage.css";
import WelcomeComponent from "../components";

const HomePage = () => {
  return (
    <>
      <div className="flex Home-style flex-row full-width-height">
        <WelcomeComponent />
      </div>
    </>
  );
};

export default HomePage;
