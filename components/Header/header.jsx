import Image from "next/image";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavItem } from "../Nav/nav-item";

const Header = () => {
  return (
    <>
      <header className="bg-yellow-400 px-6 pb-2 md:py-0">
        <nav className="container mx-auto flex justify-end items-center	pt-5">
          <a href="#" className="mr-auto">
            <Image
              src="/digikid-color.svg"
              alt="Logo"
              width={130}
              height={40}
            />
          </a>
          <NavItem link="#why">Pourquoi ?</NavItem>
          <NavItem link="#lessons">Les cours</NavItem>
          <NavItem link="#infos">Infos pratique</NavItem>
          <NavItem link="#teacher">Le prof</NavItem>
          <NavItem link="#register" register mobile>
            Sinscrire
          </NavItem>
        </nav>
        <div className="container mx-auto md:flex items-end justify-center">
          <div className="md:block hidden">
            <Image
              src="/digikid-jeanne-header.png"
              alt="digikid Jeanne"
              width={480}
              height={450}
            />
          </div>
          <div className="text-center md:mt-0 mt-20">
            <Image
              src="/digikid-at-leon.svg"
              alt="Digikid@St-Leon Logo"
              width={460}
              height={150}
            />

            <h2 className="text-4xl font-bold text-purple-800 mb-24 -m-4">
              Apprenons aux enfants à créer le web
            </h2>
            <AnchorLink
              className="btn block  uppercase text-3xl bg-purple-800 hover:bg-purple-600 text-white py-4 px-8 rounded-lg font-digikid md:mb-24 mb-4"
              href="#infos"
            >
              Comment ça marche
            </AnchorLink>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
