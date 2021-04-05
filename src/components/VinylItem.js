import React from "react";
import CareScale from "./CareScale";
import "../styles/VinylItem.css";

const VinylItem = ({
  id,
  cover,
  name,
  sensitivity,
  durability,
  color,
  price,
}) => {
  const handleClick = (name, color) => {
    alert(`Vous voulez acheter 1 ${name} ${color} ? Très bon choix ✨`);
  };

  return (
    <li key={id} className={"vinyl-item"} onClick={() => handleClick}>
      <span className="vinyl-item-price">{price}€</span>
      <img className="vinyl-item-cover" src={cover} alt={`${name} cover`} />
      {name} {color}
      <div>
        <CareScale careType="sensitivity" scaleValue={sensitivity} />
        <CareScale careType="durability" scaleValue={durability} />
      </div>
    </li>
  );
};

export default VinylItem;
