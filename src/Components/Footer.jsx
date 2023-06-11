import React from "react";
import "../style.css";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright ©️{date}</p>
    </footer>
  );
}

export default Footer;
