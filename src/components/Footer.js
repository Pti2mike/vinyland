import React, { useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleBlur = () => {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  };

  return (
    <footer className="vinyl-footer">
      <div className="vinyl-footer-elem">
        Pour les passionné·e·s de vinyles 🥏
      </div>
      <div className="vinyl-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        value={inputValue}
        onChange={handleInput}
        onBlur={handleBlur}
      />
    </footer>
  );
};

export default Footer;
