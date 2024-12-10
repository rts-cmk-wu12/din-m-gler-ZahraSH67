
'use client'

import Image from "next/image";
import Vector from "@/assets/images/Vector.png";
import HeaderCall from "@/assets/images/HeaderCall.png";
import loginIcon from "@/assets/images/login.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Install js-cookie

export default function ContactHeader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const token = Cookies.get("dm_token");
      const userid = Cookies.get("dm_userid");

      console.log("Token:", Cookies.get("dm_token"));
      console.log("User ID:", Cookies.get("dm_userid"));

      if (token && userid) {
        const response = await fetch(`https://dinmaegler.onrender.com/users/${userid}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = await response.json();
        console.log("User Data:", userData);
        setUser(userData);
      }
    }
    fetchUser();
  }, []);

  const handleLogout = () => {
    Cookies.remove("dm_token");
    Cookies.remove("dm_userid");
    setUser(null);
  };

  return (
    <div className="bg-customBlue flex flex-wrap items-center justify-around px-4 py-4"
    
 >
  {/* bg-customBlue flex justify-around h-[3em] */}
  {/* Left section */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
      {/* flex justify-between gap-[1em] */}
        <div className="flex items-center gap-2">
          <Image src={Vector} alt="vector" className="w-4 h-4" />
          <a href="mailto:4000@dinmaegler.com" className="text-white text-sm hover:underline">
                    4000@dinmaegler.com
          </a>
      
        </div>

        <div className="flex items-center gap-2">
          <Image src={HeaderCall} alt="headercall" className="w-4 h-4" />
          <a href="tel:+45 7070 4000" className="text-white text-sm hover:underline">
                    +45 7070 4000
          </a>
        </div>
      </div>
{/* Right section */}

      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        {user ? (
          <div className="flex items-center gap-2">
            {/* <p className="text-white">Welcome, {user.username}</p> */}
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 text-sm px-3 py-1 rounded hover:bg-red-700"
            >
              Log ud
            </button>
          </div>
        ) : (
          <Link href="/login" className="flex items-center gap-2">
            <Image src={loginIcon} alt="login" className="w-4 h-4" />
            <p className="text-white  text-sm hover:underline">Log ind</p>
          </Link>
        )}
        </div>
      
    </div>
  );
}
