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
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-sm border border-slate-300 font-sans">
      <h2 className="text-xl font-bold text-indigo-700 mb-4 border-b border-slate-200 pb-2">
        E-Commerce Item Counter
      </h2>

      <div className="mb-4 space-y-1">
        <p className="text-slate-800 font-semibold text-base">Product: Premium Wireless Earbuds</p>
        <p className="text-slate-500 text-sm">Price per unit: <span className="font-bold text-slate-700">₹{unitPrice}</span></p>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-slate-600 mb-1">Select Variant:</label>
        <select
          value={size}
          onChange={handleSizeChange}
          className="w-full p-2.5 border border-slate-300 rounded-md text-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Small">Small Variant</option>
          <option value="Medium">Medium Variant</option>
          <option value="Large">Large Variant</option>
        </select>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={handleDecrement}
          className="bg-rose-600 hover:bg-rose-700 text-white px-3.5 py-1.5 rounded-md font-bold text-sm transition"
        >
          -
        </button>
        <span className="text-lg font-bold text-slate-800 px-2">{qty}</span>
        <button
          onClick={handleIncrement}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-md font-bold text-sm transition"
        >
          +
        </button>
      </div>

      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md space-y-1">
        <p className="text-xs text-slate-600">Selected Variant: <b className="text-slate-800">{size}</b></p>
        <p className="text-base font-bold text-indigo-700">Total Price: ₹{qty * unitPrice}</p>
      </div>
    </div>
  );
}

export default ItemCalculator;
