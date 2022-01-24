import React from "react";
import arkaneLogo from "./assets/arcane-logo.png";

function Footer() {
  return (
    <footer>
      <img src={arkaneLogo} alt="arkane-logo" />
      <p>©Riot Games, Netflix</p>
    </footer>
  );
}

export default Footer;
