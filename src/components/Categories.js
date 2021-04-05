import React from "react";
import "../styles/Categories.css";

const Categories = ({ sizes, sizesSelected, setSizesSelected }) => {
  // console.log(sizes);

  return (
    <div className="vinyl-categories">
      <span>Selectionner une catégorie:</span>
      <select
        value={sizesSelected}
        onChange={(e) => setSizesSelected(e.target.value)}
        className="vinyl-categories-select"
      >
        <option value="">...</option>
        {sizes &&
          sizes.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
      </select>
      <button onClick={() => setSizesSelected("")}>Réinitialiser</button>
    </div>
  );
};

export default Categories;
