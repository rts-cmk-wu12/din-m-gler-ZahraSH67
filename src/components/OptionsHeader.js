'use client'

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { useState } from "react";

export default function OptionsHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-wrap items-center justify-evenly h-auto px-4 py-4 bg-white shadow-md ">
      {/* Logo Section */}
      <Link href="/">
        <Image src={logo} alt="logo" className="w-[10em] h-auto sm:w-[12em]" />
      </Link>

      {/* Hamburger Menu for mobile */}
      <div className="">
          <button
            onClick={toggleMenu}
            className="sm:hidden flex flex-col items-center justify-center space-y-1"
          >
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>

          {/* Navigation Menu */}
          <ul
            className={`sm:flex sm:gap-4 mt-2 sm:mt-0 ${isMenuOpen ? "flex flex-col" : "hidden sm:flex"}`}
          >
            <li>
              <Link
                href="/buildingForSell"
                className="hover:text-blue-600 transition py-1 px-2"
              >
                Boliger til salg
              </Link>
            </li>
            <li>
              <Link
                href="/agents"
                className="hover:text-blue-600 transition py-1 px-2"
              >
                Mæglere
              </Link>
            </li>
            <li>
              <Link
                href="/savedBuildings"
                className="hover:text-blue-600 transition py-1 px-2"
              >
                Mine favoritter
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                className="hover:text-blue-600 transition py-1 px-2"
              >
                Kontakt os
              </Link>
            </li>
          </ul>
      </div>

    </div>
  );
}






