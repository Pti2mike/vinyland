import React, { useState } from "react";
import { vinylList } from "../datas/vinylList";
import "../styles/ShoppingList.css";
import VinylItem from "./VinylItem";
import Categories from "./Categories";

const ShoppingList = ({ cart, setCart }) => {
  const [sizesSelected, setSizesSelected] = useState("");
  // Petite précision : size nous vient de la partie précédente pour récupérer toutes les sizes uniques de vinyle.
  const sizes = vinylList.reduce(
    (acc, vinyl) => (acc.includes(vinyl.size) ? acc : acc.concat(vinyl.size)),
    []
  );

  //   console.log(sizes);

  const addToCart = (name, color, price) => {
    const currentVinylAdded = cart.find(
      (vinyl) => vinyl.name === name && vinyl.color === color
    );
    if (currentVinylAdded) {
      const cartFilteredCurrentVinyl = cart.filter(
        (vinyl) => vinyl.name !== name && vinyl.color !== color
      );
      setCart([
        ...cartFilteredCurrentVinyl,
        { name, color, price, quantity: currentVinylAdded.quantity + 1 },
      ]);
    } else {
      setCart([...cart, { name, color, price, quantity: 1 }]);
    }
  };

  return (
    <div className="shopping-list">
      <Categories
        sizes={sizes}
        sizesSelected={sizesSelected}
        setSizesSelected={setSizesSelected}
      />

      <ul className="vinyl-list">
        {vinylList.map(
          ({ id, cover, name, sensitivity, durability, color, price, size }) =>
            !sizesSelected || sizesSelected === size ? (
              <div key={id}>
                <VinylItem
                  cover={cover}
                  name={name}
                  sensitivity={sensitivity}
                  durability={durability}
                  color={color}
                  price={price}
                />
                <button onClick={() => addToCart(name, color, price)}>
                  Ajouter
                </button>
              </div>
            ) : null
        )}
      </ul>
    </div>
  );
};

export default ShoppingList;
