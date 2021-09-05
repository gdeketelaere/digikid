import Image from "next/image";
import React from "react";
import { NavItem } from "../Nav/nav-item";

const Header = () => {
  return (
    <>
      <header className="bg-yellow-400">
        <nav className="container mx-auto flex justify-end items-center	pt-5">
          <a href="#" className="mr-auto">
            <Image
              src="/digikid-color.svg"
              alt="Logo"
              width={130}
              height={40}
            />
          </a>
          <NavItem link="#">Pourquoi ?</NavItem>
          <NavItem link="#">Les cours</NavItem>
          <NavItem link="#">Infos pratique</NavItem>
          <NavItem link="#">Le prof</NavItem>
          <NavItem link="#" register>
            Sinscrire
          </NavItem>
        </nav>
        <div className="container mx-auto flex items-end justify-center">
          <Image
            src="/digikid-jeanne-header.png"
            alt="digikid Jeanne"
            width={480}
            height={450}
          />
          <div className="text-center">
            <Image
              src="/digikid-at-leon.svg"
              alt="Digikid@St-Leon Logo"
              width={460}
              height={150}
            />
            <h2 className="text-4xl font-bold text-purple-800 mb-24 -m-4">
              Apprenons aux enfants à créer le web
            </h2>
            <button className="btn uppercase text-3xl bg-purple-800 hover:bg-purple-600 text-white py-4 px-8 rounded-lg font-digikid mb-24">
              Comment ça marche
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
