import React from "react";

export const NavItem = ({ children, link, register }) => {
  return (
    <>
      <a
        className={`font-digikid text-white uppercase text-2xl px-6  hover:text-purple-600 ${
          register ? "bg-white rounded-lg text-yellow-400" : ""
        }`}
        href={link}
      >
        {children}
      </a>
    </>
  );
};
