import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Simple React Number Counter</h1>
        <h1 className="text-2xl font-bold mb-4">Kelompok Kosan KPK</h1>
        <p className="text-lg mb-4">Current count: {count}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-2xl"
          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-2xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
