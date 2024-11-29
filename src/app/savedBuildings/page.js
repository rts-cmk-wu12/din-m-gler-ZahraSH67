"use client"

import { useEffect, useState } from 'react';
// import Link from 'next/link';
import ContactHeader from '@/components/ContactHeader';
import OptionsHeader from '@/components/OptionsHeader';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ErrorPage from '@/components/ErrorPage';


const formatNumberWithDots = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}; 

   //Random color
   const getRandomColor = () => {
    const colors = ["bg-red-200", "bg-green-200", "bg-blue-200", "bg-yellow-200", "bg-purple-200"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

export default function SavedBuildings() {
  const [savedBuildings, setSavedBuildings] = useState([]);
  const [error, setError] = useState(false); // State to handle errors

  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem("savedBuildings")) || [];
  //   console.log("SAVED BUILDINGS:", saved); // Debugging

  //   setSavedBuildings(saved);
  // }, []); // Runs only once when the component 
  

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("savedBuildings")) || [];
      setSavedBuildings(saved);
    } catch (err) {
      console.error("Error loading saved buildings:", err);
      setError(true); // Set error state if an issue occurs
    }
  }, []);


    // Function to handle removing a building from favorites
    const handleRemoveBuilding = (buildingId) => {
      const updatedBuildings = savedBuildings.filter(building => building.id !== buildingId);
      setSavedBuildings(updatedBuildings);
      localStorage.setItem("savedBuildings", JSON.stringify(updatedBuildings)); // Update local storage
    }; 

     // Render the ErrorPage if an error occurs
  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="">
      <ContactHeader />
      <OptionsHeader />
      <Title title="Mine favoritboliger" />
      <main className='flex justify-center items-center '>
          <div className=''>{savedBuildings.length === 0 ? (
          <p>No buildings saved yet.</p>
        ) : (
          <ul className=''>
            {savedBuildings.map((building) => (
              <li key={building.id} className="border bordr-gray-300 p-4 mb-4 ">
                {/* <Link href={`/building/${building.id}`} className='flex'> */}
                <div className='flex'>
                  <div>
                    <Image src={building.images[0].url} alt="" width={200} height={300}/>
                  </div>

                  <div className='flex flex-col justify-center px-[1em]'>
                    <div className='flex gap-[1em] mb-[1em]'>
                      <h3 className='font-bold text-sm'>{building.adress1}</h3>
                      <div className=''>
                        <span className={`px-2 py-1 ${getRandomColor()}`}>{building.energylabel} </span>
                        <span className="ml-[1em] text-sm">{building.rooms} værelser.  </span>
                        <span className="ml-[0.25em] text-sm">{building.floorplan.size} m²</span>
                      </div>
                      <p className="font-bold text-sm"> kr. {formatNumberWithDots(building.price)}</p>
                    </div>

                    <p className=" text-sm mx-[1em] mb-[1em]">{building.postalcode} {building.city}</p>

                    <div className='flex justify-between'>
                    <div className="mx-[1em] mb-[1em] text-sm	">
                      <span className="font-bold">{building.type}</span>
                      <span className="text-sm"> •Ejerudgift: </span>
                      <span className="text-sm">{formatNumberWithDots(building.cost)} kr.</span>
                    </div>
                    <button className='bg-customBlue text-white p-[1em]'
                    onClick={() => handleRemoveBuilding(building.id)} // Add click handler here
                    >Fjern fra favotitter</button>
                    </div>
           
                  </div>
                 
                </div>
                
              </li>
            ))}
          </ul>
        )}
        </div>
      
      </main>
 
      <Footer />
    </div>
  );
}
