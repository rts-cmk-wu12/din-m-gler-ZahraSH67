
'use client'

import React, { useState , useEffect } from "react";

import Image from "next/image";

// export default async function SelectedHomes() {
//     const res = await fetch('https://dinmaegler.onrender.com/homes');
//     const data = await res.json();
//     console.log("DATA IS:", data)


//   // State to manage whether to show all buildings or only 4
//   const [showAll, setShowAll] = useState(false);

//   // Toggle the visibility of buildings
//   const toggleShowAll = () => {
//     setShowAll((prev) => !prev);
//   };

//   // Decide which data to display based on state
//   const displayedData = showAll ? data : data.slice(0, 4);

export default function SelectedHomes() {
  const [homes, setHomes] = useState([]); // State to store the homes
  const [showAll, setShowAll] = useState(false); // State to toggle showing all homes

  // Fetch data on the client side
  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const res = await fetch('https://dinmaegler.onrender.com/homes');
        const data = await res.json();
        setHomes(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching homes:", error);
      }
    };

    fetchHomes();
  }, []);

  // Decide which data to display based on showAll state
  const displayedHomes = showAll ? homes : homes.slice(0, 4);


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
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-2xl mb-[1em]">Udvalgte Boliger</h2>
      <p className="text-center mb-[2em]">
        There are many variations of passages of Lorem Ipsum available but
        this in <br/> majority have suffered alteration in some.
      </p>


      {/* Map through the homes data and pass each home as props to SelectedHomesCard */}
      <section className="grid grid-cols-2 gap-6">
        {displayedHomes.map((home) => (
                <div key={home.id} className="w-[25em] h-auto shadow-md rounded-lg">

                        <div className="w-full">
                        <Image src={home.images[0].url} alt="Building picture" width={400} height={300}/>
                        </div>

                        <div>
                          <h2 className="font-bold mx-[1em] my-[1em]">{home.adress1}</h2>
                          <p className=" text-sm mx-[1em] mb-[1em]">{home.postalcode} {home.city}</p>
                          <div className="mx-[1em] mb-[1em] ">
                              <span className="font-bold">{home.type}</span>
                              <span className="text-sm"> •Ejerudgift: </span>
                              <span className="text-sm">{formatNumberWithDots(home.netto)} kr.</span>
                          </div>
                          <div className="w-[18em] border-b-2 border-gray-400 mt-2 mx-auto"></div>
                        </div>


                        <div className="mx-[1em] my-[1em] flex justify-between">
                        <div>
                            <span className={`px-2 py-1 ${getRandomColor()}`}>{home.energylabel} </span>
                            <span className="ml-[1em] text-sm">{home.rooms} værelser.  </span>
                            <span className="ml-[0.25em]">{home.floorplan.size} m²</span>
                        </div>
                        <div className="font-bold"> kr. {formatNumberWithDots(home.price)}</div>
                        </div>
                    </div>
        ))}
      </section>



       {/* Button to toggle between showing all homes and only 4 */}
      <div className="mt-4 text-center">
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


