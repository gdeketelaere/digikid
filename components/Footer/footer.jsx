import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black p-3">
      <div className="container mx-auto text-white text-center">
        <span className="align-middle">
          <Image
            src="/digikid-white.svg"
            alt="Digikid Logo"
            width={60}
            height={20}
          />
        </span>
        &nbsp; 2021 - Gilles Deketelaere - gilles@digikid.be
      </div>
    </footer>
  );
};
