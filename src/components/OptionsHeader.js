// import Image from "next/image";
// import logo from "@/assets/images/logo.png"
// import Link from "next/link";


// export default function OptionsHeader() {
//   return (
//     <div className="flex justify-evenly items-center h-[4em] px-[2em] ">

//       <Link href="/">
//         <Image src={logo} alt="logo" className="w-[12em] h-[2em]"/>
//       </Link>
     


//       <ul className="flex justify-between text-xs gap-[2em]">
//         <li><Link href="/buildingForSell">Boliger til salg</Link></li>
//         <li><Link href="/agents">Mæglere</Link></li>
//         <li><Link href="/savedBuildings">Mine favoritter</Link></li>
//         <li><Link href="/contactUs">Kontakt os</Link></li>
      
//       </ul>

//     </div>
//   )
// }



// 'use client'
// import Image from "next/image";
// import logo from "@/assets/images/logo.png";
// import Link from "next/link";
// import { useState } from "react";

// export default function OptionsHeader() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="flex items-center justify-between h-[4em] px-4 bg-white shadow-md">
//       {/* Logo */}
//       <Link href="/">
//         <Image src={logo} alt="logo" className="w-[10em] h-auto" />
//       </Link>

//       {/* Hamburger Menu Button (Visible on small screens) */}
//       <button
//         onClick={() => setIsMenuOpen((prev) => !prev)}
//         className="block sm:hidden focus:outline-none"
//       >
//         <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
//         <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
//         <span className="block w-6 h-1 bg-gray-700"></span>
//       </button>

//       {/* Menu */}
//       <ul
//         className={`absolute sm:static top-[4em] left-0 w-full sm:w-auto sm:flex flex-col sm:flex-row bg-white sm:bg-transparent shadow-md sm:shadow-none text-center sm:text-left transition-transform ${
//           isMenuOpen ? "translate-y-0" : "-translate-y-full"
//         } sm:translate-y-0`}
//       >
//         <li className="py-2 sm:py-0">
//           <Link
//             href="/buildingForSell"
//             className="block px-4 py-2 sm:px-2 sm:py-0 hover:text-blue-600"
//           >
//             Boliger til salg
//           </Link>
//         </li>
//         <li className="py-2 sm:py-0">
//           <Link
//             href="/agents"
//             className="block px-4 py-2 sm:px-2 sm:py-0 hover:text-blue-600"
//           >
//             Mæglere
//           </Link>
//         </li>
//         <li className="py-2 sm:py-0">
//           <Link
//             href="/savedBuildings"
//             className="block px-4 py-2 sm:px-2 sm:py-0 hover:text-blue-600"
//           >
//             Mine favoritter
//           </Link>
//         </li>
//         <li className="py-2 sm:py-0">
//           <Link
//             href="/contactUs"
//             className="block px-4 py-2 sm:px-2 sm:py-0 hover:text-blue-600"
//           >
//             Kontakt os
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }



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






