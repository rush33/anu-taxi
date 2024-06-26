"use client";

import Link from "next/link";
import React from "react";
import { NAV_LINKS, PHONE_NUMBER } from "../constants";
import Image from "next/image";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className="bold-20">
        Anu Tour & Taxi
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Book A Ride"
          icon="/call.svg"
          variant="btn_dark_green"
          onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}
        />
      </div>

      {/* <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      /> */}
    </nav>
  );
};

export default NavBar;
