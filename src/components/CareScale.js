import React from "react";

const CareScale = ({ scaleValue, careType }) => {
  const quantityLabel = {
    1: "peu",
    2: "modérément",
    3: "très",
  };

  const range = [1, 2, 3];

  const scaleType = careType === "durability" ? "💪🏼" : "🤚🏼";

  return (
    <div
      onClick={() =>
        alert(
          `Ce vinyle est ${quantityLabel[scaleValue]} ${
            careType === "sensitivity" ? "🤚🏼" : "💪🏼"
          } au toucher`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
};

export default CareScale;
