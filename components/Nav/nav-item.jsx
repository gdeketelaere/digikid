import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const NavItem = ({ children, link, register, mobile }) => {
  return (
    <>
      <AnchorLink
        className={`md:block font-digikid text-white uppercase text-2xl px-6  hover:text-purple-600 ${
          mobile ? "" : "hidden"
        } ${register ? "bg-white rounded-lg text-yellow-400" : ""}`}
        href={link}
      >
        {children}
      </AnchorLink>
    </>
  );
};
