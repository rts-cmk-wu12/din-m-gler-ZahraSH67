
"use client";

import { useState } from "react";
import { z } from "zod"; // For validation
import giantBuilding from "@/assets/images/giantBuilding.png";
import RightVector from "@/assets/images/RightVector.png";
import Image from "next/image";

export default function Subscription() {
  // Schema definition for email using Zod
  const emailSchema = z
    .string()
    .min(1, { message: "Feltet skal udfyldes" })
    .email({ message: "Ugyldig email" });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false); // Check subscription status
  const handleSubscribe = async () => {
    // To validate email
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      setMessage(validation.error.issues[0]?.message || "Invalid input!");
      return;
    }

    setLoading(true);
    setMessage(""); //Delete previous messages

    try {
      const response = await fetch("https://dinmaegler.onrender.com/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Du har tilmeldt dig med succes!");
        setIsSubscribed(true);
                // حذف پیام بعد از چند ثانیه
        setTimeout(() => {
          setMessage("");
        }, 3000); // 3000 میلی‌ثانیه معادل 3 ثانیه
      
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Der er et problem. Prøv igen!");
      }
    } catch (error) {
      setMessage("Der er et problem. Prøv igen!");
    } finally {
      setLoading(false);
    }
  };

  const handleUnsubscribe = async () => {
    setLoading(true);
    setMessage(""); // Delete previous messages

    try {
      const response = await fetch(`https://dinmaegler.onrender.com/subscribers/${email}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage("Din tilmeldelse er blevet annulleret!");
        setIsSubscribed(false);
        setEmail(""); // Delete email
                        // حذف پیام بعد از چند ثانیه
                        setTimeout(() => {
                          setMessage("");
                        }, 3000); // 3000 میلی‌ثانیه معادل 3 ثانیه
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Der er et problem. Prøv igen!");
      }
    } catch (error) {
      setMessage("Der er et problem. Prøv igen!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative h-[200px] w-full bg-cover bg-center mb-[2em] mt-[2em]"
      style={{ backgroundImage: `url(${giantBuilding.src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Title text */}
      <div className="relative flex flex-col lg:flex-row items-center justify-evenly h-full ">
        <h2 className="text-white text-lg font-bold">
          Tilmeld dig vores nyhedsbrev og <br />
          hold dig opdateret på boligmarkedet
        </h2>

        <div className=" flex flex-col items-center gap-[2em]">

        {!isSubscribed ? (
          // نمایش فرم عضویت
          
          <div className="flex items-center bg-white overflow-hidden ">
            {/* w-3/4 max-w-lg */}
            <input
              type="email"
              placeholder="Indtast din email adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3  pl-4 pr-20 text-gray-700"
            />
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="bg-white hover:bg-blue-700 hover:w-[3em] hover:h-[3em] text-white px-3 py-3  disabled:opacity-50"
            >
              {/* {loading ? "Loading..." : "Tilmeldelse"} */}
              <Image src={RightVector} alt="search icon" />
            </button>
          </div>
        ) : (
          // نمایش دکمه لغو عضویت
          // <div></div>
          <div className="flex flex-col">
            <button
              onClick={handleUnsubscribe}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 disabled:opacity-50 rounded-md"
            >
              {loading ?  "Loading..." : "Unsubscribe"}
            </button>
          </div>
        )}
        {message && <span className="bg-red-500 text-white font-bold p-2 mt-2">{message}</span>}
        </div>
       
      </div>
    </div>
  );
}
