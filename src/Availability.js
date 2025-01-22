import React, { useState } from 'react';
import "./App.css";

function Availability() {
  const [inStock, setInStock] = useState(true); // state to manage stock status

  // Function to toggle the stock status
  const toggleStockStatus = () => {
    setInStock(!inStock);
  };

  return (
    <div className="availability-container">
      <div className="availability-card">
        <h3>Clock Availability</h3>
        <div className={`availability-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </div>
        <button className="toggle-button" onClick={toggleStockStatus}>
          luxury
        </button>
        <button className="toggle-button" onClick={toggleStockStatus}>
          vintage
        </button>
        <button className="toggle-button" onClick={toggleStockStatus}>
          smart
        </button>
      </div>
    </div>
  );
}

export default Availability;
