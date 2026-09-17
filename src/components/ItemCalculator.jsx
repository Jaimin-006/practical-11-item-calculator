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

  function handleReset() {
    setQty(1);
    setSize('Medium');
  }

  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  const totalPrice = qty * unitPrice;
  const isFreeShipping = totalPrice >= 1000;

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md border border-slate-200/80 font-sans">
      <div className="border-b border-slate-100 pb-3 mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          E-Commerce Item Counter
        </h2>
        <button
          onClick={handleReset}
          className="text-xs text-slate-500 hover:text-indigo-600 font-semibold underline"
        >
          Reset
        </button>
      </div>

      <div className="mb-5 space-y-1">
        <p className="text-slate-900 font-semibold text-base">Product: Premium Wireless Earbuds</p>
        <p className="text-slate-500 text-sm">Price per unit: <span className="font-bold text-indigo-600">₹{unitPrice}</span></p>
      </div>

      <div className="mb-5">
        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Select Variant:</label>
        <select
          value={size}
          onChange={handleSizeChange}
          className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
        >
          <option value="Small">Small Variant</option>
          <option value="Medium">Medium Variant</option>
          <option value="Large">Large Variant</option>
        </select>
      </div>

      <div className="flex items-center space-x-4 mb-5">
        <button
          onClick={handleDecrement}
          className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition active:scale-95"
        >
          -
        </button>
        <span className="text-lg font-bold text-slate-900 px-3 py-1 bg-slate-100 rounded-md border border-slate-200">{qty}</span>
        <button
          onClick={handleIncrement}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition active:scale-95"
        >
          +
        </button>
      </div>

      {isFreeShipping && (
        <div className="mb-4 p-2 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-semibold text-center animate-pulse">
          🎉 Free Express Shipping Unlocked! (Order &gt; ₹1000)
        </div>
      )}

      <div className="p-4 bg-indigo-50/60 border border-indigo-100 rounded-lg space-y-1">
        <p className="text-xs text-indigo-900 font-medium">Selected Variant: <b className="text-indigo-700">{size}</b></p>
        <p className="text-base font-bold text-indigo-900">Total Price: <span className="text-indigo-600">₹{totalPrice}</span></p>
      </div>
    </div>
  );
}

export default ItemCalculator;
