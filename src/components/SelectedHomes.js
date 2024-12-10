
'use client'

import React, { useState , useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import FormatNumberWithDots from "./FormatNumberWithDots";
import GetRandomColor from "./GetRandomColor";


export default function SelectedHomes() {
  const [homes, setHomes] = useState([]); // State to store the homes
  const [showAll, setShowAll] = useState(false); // State to toggle showing all homes

  // Fetch data on the client side
  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const res = await fetch('https://dinmaegler.onrender.com/homes');
        const data = await res.json();
        console.log("DATA OF SELECTED BUILDINGS:", data)
        setHomes(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching homes:", error);
      }
    };

    fetchHomes();
  }, []);

  // Decide which data to display based on showAll state
  // const displayedHomes = showAll ? homes : homes.slice(0, 4);
  const displayedHomes = showAll ? homes : homes.sort(() => 0.5 - Math.random()).slice(0,4)


  //Random color
    const getRandomColor = () => {
      const colors = ["bg-red-200", "bg-green-200", "bg-blue-200", "bg-yellow-200", "bg-purple-200"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

  // Function to format numbers with dots
  const formatNumberWithDots = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };


  return (
    <div className="flex flex-col items-center px-4 md:px-8">
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4 text-center">Udvalgte Boliger</h2>
      <p className="text-center text-sm md:text-base mb-6">
        There are many variations of passages of Lorem Ipsum available but
        this in <br className="hidden md:block"/> majority have suffered alteration in some.
      </p>


      {/* Map through the homes data and pass each home as props to SelectedHomesCard */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
      {/* grid grid-cols-2 gap-[1em] */}
        {displayedHomes.map((home) => (
                <Link key={home.id} href={`/building/${home.id}`} className="shadow-md rounded-lg overflow-hidden bg-white">

                        <div className="w-full h-48 md:h-56 lg:h-64 relative">
                        <Image src={home.images[0].url} 
                            // width={400} height={300}  
                            alt="Building picture"
                            layout="fill"
                            objectFit="cover"/>
                        </div>

                        <div className="p-4">
                          <h2 className="font-bold text-base md:text-lg">{home.adress1}</h2>
                          <p className="text-sm text-gray-500 mt-1">{home.postalcode} {home.city}</p>
                          <div className="text-sm mt-2">
                              <span className="font-bold">{home.type}</span>
                              <span className="text-sm ml-2"> •Ejerudgift: </span>
                              <span className="text-sm ml-1">{FormatNumberWithDots(home.netto)} kr.</span>
                          </div>
                          <div className="border-t border-gray-300 mt-4"></div>
                          {/* w-[18em] border-b-2 border-gray-400 mt-2 mx-auto */}
                        </div>


                        <div className="p-4 flex justify-between items-center">
                        <div>
                            <span className={`px-2 py-1 text-sm ${GetRandomColor()}`}>{home.energylabel} </span>
                            <span className="ml-2 text-sm">{home.rooms} værelser. {home.floorplan.size} m² </span>
                            {/* <span className="ml-[0.25em]"></span> */}
                        </div>
                        <div className="font-bold text-base md:text-lg"> kr. {FormatNumberWithDots(home.price)}</div>
                        </div>
                    </Link>
        ))}
      </section>



       {/* Button to toggle between showing all homes and only 4 */}
      <div className="mt-6">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="px-4 py-2 bg-customBlue text-white hover:bg-blue-600"
        >
          {showAll ? "Vis mindre" : "Se alle boliger"}
        </button>
      </div>
      
    </div>
  )
}


