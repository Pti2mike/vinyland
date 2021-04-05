import React, { useState, useEffect } from "react";
import "../styles/Cart.css";

const Cart = ({ cart, setCart }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Calcul du total du panier avec la méthode reduce
  const total = cart.reduce(
    (acc, vinylType) => acc + vinylType.quantity * vinylType.price,
    0
  );

  // Effectue notre effet de bord une fois le rendu du composant terminé
  useEffect(() => {
    // Mettra à jour le titre de l'onglet du navigateur
    document.title = `Vinyland: ${total}€ d'achats`;
  }, [total]);

  return isOpen ? (
    <div className="vinyl-cart">
      <button className="cart-toggle-button" onClick={() => setIsOpen(false)}>
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, color, price, quantity }, index) => (
              <div key={`${name}-${index}`}>
                {name} {color} {price}€ x {quantity}
              </div>
            ))}
          </ul>

          <h3>Total: {total}€ </h3>
          <button onClick={() => setCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="cart-closed">
      <button className="cart-toggle-button" onClick={() => setIsOpen(true)}>
        Ouvrir le Panier
      </button>
    </div>
  );
};

export default Cart;
