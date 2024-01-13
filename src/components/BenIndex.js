import React, { useState } from "react";

const BenIndex = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "purchasePrice") {
      setPurchasePrice(value);
    } else if (id === "monthlyRent") {
      setMonthlyRent(value);
    }
  };

  const calculateBenIndex = () => {
    const parsedPurchasePrice = parseFloat(purchasePrice);
    const parsedMonthlyRent = parseFloat(monthlyRent);

    if (isNaN(parsedMonthlyRent) || isNaN(parsedPurchasePrice)) {
      alert("Please enter valid numeric values");
      return;
    }

    const imputedRent = parsedPurchasePrice * 0.05;

    if (imputedRent / 12 > parsedMonthlyRent) {
      setResult("Renting is cheaper");
    } else {
      setResult("Purchasing a home is cheaper");
    }
  };

  return (
    <div>
      <label htmlFor="purchasePrice">Purchase Price:</label>
      <input
        type="text"
        id="purchasePrice"
        value={purchasePrice}
        onChange={handleInputChange}
      />

      <label htmlFor="monthlyRent">Monthly Rent:</label>
      <input
        type="text"
        id="monthlyRent"
        value={monthlyRent}
        onChange={handleInputChange}
      />

      <button onClick={calculateBenIndex}>Calculate</button>

      <div id="result">
        <p>{result}</p>
      </div>
    </div>
  );
};

export default BenIndex;
