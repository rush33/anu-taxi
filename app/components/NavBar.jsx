"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the menu when a link is clicked
    }
  };

  return (
    <nav className="flexBetween max-container relative z-30 pt-2">
      <div className="flex items-center p-4 md:p-8">
        <Image src="/logo-small.png" alt="Logo" width={40} height={40} />
        <Link href="/" className="bold-20 ml-2">
          Anu Tour and Taxi
        </Link>
      </div>

      <ul className="hidden lg:flex h-full gap-12 p-4 md:p-8">
        <li
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          onClick={() => handleScroll("home")}
        >
          Home
        </li>
        <li
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          onClick={() => handleScroll("plantrip")}
        >
          Cars
        </li>
        <li
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          onClick={() => handleScroll("reviews")}
        >
          Reviews
        </li>
        <li
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          onClick={() => handleScroll("footer")}
        >
          Reach Us
        </li>
      </ul>

      <div className="lg:hidden flex items-center p-4 md:p-8">
        <Image
          src={isMenuOpen ? "/close.svg" : "/menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg w-full lg:hidden">
          <ul className="flex flex-col items-center py-4">
            <li
              className="regular-16 text-gray-50 flexCenter cursor-pointer py-2 transition-all hover:font-bold"
              onClick={() => handleScroll("home")}
            >
              Home
            </li>
            <li
              className="regular-16 text-gray-50 flexCenter cursor-pointer py-2 transition-all hover:font-bold"
              onClick={() => handleScroll("plantrip")}
            >
              Cars
            </li>
            <li
              className="regular-16 text-gray-50 flexCenter cursor-pointer py-2 transition-all hover:font-bold"
              onClick={() => handleScroll("reviews")}
            >
              Reviews
            </li>
            <li
              className="regular-16 text-gray-50 flexCenter cursor-pointer py-2 transition-all hover:font-bold"
              onClick={() => handleScroll("footer")}
            >
              Reach Us
            </li>
          </ul>
        </div>
      </CSSTransition>
    </nav>
  );
};

export default NavBar;
