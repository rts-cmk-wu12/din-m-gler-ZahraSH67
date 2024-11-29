'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactHeader from '@/components/ContactHeader';
import OptionsHeader from '@/components/OptionsHeader';
import Footer from '@/components/Footer';
import gallery from "@/assets/images/gallery.png";
import plan from "@/assets/images/plan.png";
import idLocation from "@/assets/images/idLocation.png";
// import like from "@/assets/images/like.png"; 
import call from "@/assets/images/call.png";
import paperplane from "@/assets/images/paperplane.png";


export default function BuildingDetails({ building }) {

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const [isPlanOpen, setIsPlanOpen] = useState(false);

  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [isLiked, setIsLiked] = useState(false);

  // Gallery controls
  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);

  const goToNext = () => {
    if (currentSlide < building.images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Plan popup controls
  const openPlan = () => setIsPlanOpen(true);
  const closePlan = () => setIsPlanOpen(false);

  // Location popup controls
  const openLocation = () => setIsLocationOpen(true);
  const closeLocation = () => setIsLocationOpen(false);


useEffect(() => {
  if (building && building.id) {
    const savedBuildings = JSON.parse(localStorage.getItem("savedBuildings")) || [];
    setIsLiked(savedBuildings.some((saved) => saved.id === building.id));
  }
}, [building]);

const handleLikeClick = () => {
  const savedBuildings = JSON.parse(localStorage.getItem("savedBuildings")) || [];

  if (isLiked) {
    const updatedBuildings = savedBuildings.filter((saved) => saved.id !== building.id);
    localStorage.setItem("savedBuildings", JSON.stringify(updatedBuildings));
  } else {
    const updatedBuildings = [...savedBuildings, building];
    localStorage.setItem("savedBuildings", JSON.stringify(updatedBuildings));
  }

  setIsLiked(!isLiked); // Toggle the like state
};




  return (
    <div>
      <ContactHeader />
      <OptionsHeader />
      <main>
        <div>
          <Image
            src={building.images[0].url}
            alt={`Image of ${building.adress1}`}
            width={800}
            height={300}
            className="w-full"
          />
        </div>

        <div className="flex justify-evenly items-center mt-[2em]">
          <div>
            <p className="font-bold text-xs">{building.adress1}</p>
            <p className="font-bold text-xs">{building.postalcode} {building.city}</p>
          </div>
          <div className="flex justify-between w-[20em]">
            <button onClick={openGallery}>
              <Image src={gallery} alt="gallery" />
            </button>
            <button onClick={openPlan}>
              <Image src={plan} alt="plan" />
            </button>
            <button onClick={openLocation}>
              <Image src={idLocation} alt="idLocation" />
            </button>
            {/* <button>
              <Image src={like} alt="like" />
            </button> */}


            <button onClick={handleLikeClick}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill={isLiked ? "red" : "none"}
                          viewBox="0 0 24 24"
                          stroke={isLiked ? "red" : "gray"}
                          width="24"
                          height="24"
                          className="transition-colors duration-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"
                          />
                        </svg>
              </button>
          
 
          </div>
          <div className="font-bold">kr. {building.price}</div>
        </div>

        {/* Gallery Popup */}
        {isGalleryOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white max-w-[90%] max-h-[90%] w-[800px] h-[500px] rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={closeGallery}
                className="absolute top-3 right-3 text-white bg-black rounded-full p-2 z-10 hover:bg-red-500"
              >
                ✕
              </button>
              <div className="relative w-full h-full flex justify-center items-center bg-gray-100">
                <button
                  onClick={goToPrevious}
                  disabled={currentSlide === 0}
                  className={`absolute left-5 p-2 rounded-full bg-black text-white z-10 hover:bg-gray-800 ${
                    currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  &#8592;
                </button>
                <Image
                  src={building.images[currentSlide].url}
                  alt={`Slide ${currentSlide + 1}`}
                  width={800}
                  height={500}
                  className="max-w-full max-h-full object-contain"
                />
                <button
                  onClick={goToNext}
                  disabled={currentSlide === building.images.length - 1}
                  className={`absolute right-5 p-2 rounded-full bg-black text-white z-10 hover:bg-gray-800 ${
                    currentSlide === building.images.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Plan Popup */}
        {isPlanOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white max-w-[90%] max-h-[90%] w-[800px] h-[500px] rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={closePlan}
                className="absolute top-3 right-3 text-white bg-black rounded-full p-2 z-10 hover:bg-red-500"
              >
                ✕
              </button>
              <div className="flex justify-center items-center h-full bg-gray-100">
                <Image
                  src={building.floorplan.url}
                  alt="Floorplan"
                  width={800}
                  height={500}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Location Popup */}
        {isLocationOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white max-w-[90%] max-h-[90%] w-[800px] h-[500px] rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={closeLocation}
                className="absolute top-3 right-3 text-white bg-black rounded-full p-2 z-10 hover:bg-red-500"
              >
                ✕
              </button>
              <iframe
                src={`https://www.google.com/maps?q=${building.lat},${building.long}&z=15&output=embed`}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        )}

<div className='w-[60em] mx-auto border-b-2 border-gray-200 mt-[2em] mb-[1em] px-[5em]'></div>

         <div className="overflow-x-auto mx-[12em] mt-[2em]">
       <table className="min-w-full table-auto border-collapse ">
         <tbody className="">
     <tr className="">
       <td className="  py-2">Sagsnummer:</td>
       <td className="  py-2">{building.id}</td>
           <td className="  py-2">Kælder:</td>
           <td className="  py-2">{building.basementsize}</td>
           <td className="  py-2">udbetaing:</td>
           <td className="  py-2">kr. {building.payment}</td>
         </tr>
         <tr className="">
           <td className="  py-2">Boligareal:</td>
           <td className="  py-2">{building.lotsize} m²</td>
           <td className="  py-2">Byggeår:</td>
           <td className="  py-2">{building.built}</td>
           <td className="  py-2">Brutto ex ejerudgift:</td>
           <td className="  py-2">kr. {building.netto}</td>
         </tr>
            <tr className="">
              <td className=" py-2">Grundareal:</td>
              <td className=" py-2">{building.livingspace} m²</td>
              <td className=" py-2">Ombygget:</td>
              <td className=" py-2">{building.remodel}</td>
              <td className=" py-2">Netto ex ejerudgift:</td>
              <td className=" py-2">kr. {building.netto}</td>
            </tr>  
            <tr className="">
              <td className="  py-2">Rum/værelser:</td>
              <td className="  py-2">{building.rooms}</td>
              <td className="py-2">Energimærke</td>
              <td className="py-2">{building.energylabel}</td>
              <td className="  py-2">Ejerudgifter:</td>
              <td className="  py-2">kr. {building.cost}</td>
            </tr>
            <tr className="">
              <td className="  py-2">Antal Plan:</td>
              <td className="  py-2"></td>
            </tr>
          </tbody>
    
        </table>
      </div>
      <section className='flex  md:flex-row gap-[2em] mx-[8em] mt-[2em]'>
        <div className='flex-1 p-[1em] sm:p-[2em]'>
          <h2 className='font-bold text-lg sm:text-xl mb-[1em]'>Beskrivelse</h2>
          {/* <p>{building.description}</p> */}
          {building.description && (() => {
              // Split the description into sentences using regex
          const sentences = building.description.match(/[^.!?]+[.!?]+/g) || [building.description];
          
          // Calculate the middle index
          const middleIndex = Math.ceil(sentences.length / 2);
          
          // Join sentences for each part
          const firstPart = sentences.slice(0, middleIndex).join(' ');
          const secondPart = sentences.slice(middleIndex).join(' ');
          return (
            <>
              <p className='text-sm sm:text-base leading-relaxed'>{firstPart}</p>
              <p className='mt-4 text-sm sm:text-base leading-relaxed'>{secondPart}</p>
            </>
            );
          })()}
      </div>

      <div className='flex-1 '>
        <h2 className='font-bold text-lg mb-[1em]'>Ansvalig mægler </h2>
        <div className='flex flex-col sm:flex-row border border-gray-200 h-auto p-[1em] sm:p-[1em]'>

          <div className='sm:w-[300px] w-full mb-[2em] sm:mb-0'>
          <Image src={building.agent.image.url} alt="" width={300} height={300} className='w-full h-[10em] sm:h-[300px] object-cover'/>
          </div>


          {/* <div className='absolute bottom-0 left-0 bg-customBlue text-white text-xs px-2 py-1 w-[60%]'>GOALLLLLLLLLLLLLLLLLLLLLLLLL</div> */}
    
          
          <div className='p-[1em] sm:p-[2em]'>
            <p className='font-bold text-sm'>{building.agent.name}</p>
            <p className='text-xs text-gray-600'>{building.agent.title}</p>

            <div className='w-[2em] border-b-2 border-gray-200 mt-[2em] mb-[1em]'></div>

            <div className='flex items-center gap-[1em] text-xs	mb-[1em]'>
              <Image src={call} alt="call" className='w-[1em] h-[1em]'/>
              <a href={`tel:${building.agent.phone}`} 
                className="text-black hover:underline">
                {building.agent.phone}
              </a>
            </div>

        
            <div className='flex items-center gap-[1em] text-xs	'>
              <Image src={paperplane} alt="paperplane" className='w-[1em] h-[1em]'/>
              <a  href={`mailto:${building.agent.email}`}  
                className="text-black hover:underline">
                {building.agent.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

         

      </main>
      <Footer />
    </div>
  );
}
