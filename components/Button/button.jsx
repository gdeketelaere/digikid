import React from "react";

export const Button = ({ children }) => {
  return (
    <button className="btn uppercase text-3xl bg-purple-800 hover:bg-purple-600 text-white py-4 px-8 rounded-lg font-digikid mb-24">
      {children}
    </button>
  );
};
