import React, { useState } from 'react';

function ItemCalculator() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('Medium');
  const unitPrice = 499;

  function handleIncrement() {
    setQty(qty + 1);
  }

  function handleDecrement() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-4">E-Commerce Item Counter</h2>

      <div className="mb-4">
        <p className="text-gray-700 font-semibold">Product: Premium Wireless Earbuds</p>
        <p className="text-gray-500">Price per unit: ₹{unitPrice}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Variant:</label>
        <select
          value={size}
          onChange={handleSizeChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="Small">Small Variant</option>
          <option value="Medium">Medium Variant</option>
          <option value="Large">Large Variant</option>
        </select>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={handleDecrement}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 font-bold"
        >
          -
        </button>
        <span className="text-lg font-bold">{qty}</span>
        <button
          onClick={handleIncrement}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 font-bold"
        >
          +
        </button>
      </div>

      <div className="p-3 bg-gray-100 rounded-md">
        <p className="text-sm text-gray-600">Selected Variant: <b>{size}</b></p>
        <p className="text-lg font-bold text-green-700">Total Price: ₹{qty * unitPrice}</p>
      </div>
    </div>
  );
}

export default ItemCalculator;
