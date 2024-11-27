'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactHeader from '@/components/ContactHeader';
import OptionsHeader from '@/components/OptionsHeader';
import Footer from '@/components/Footer';
import gallery from "@/assets/images/gallery.png";
import plan from "@/assets/images/plan.png";
import idLocation from "@/assets/images/idLocation.png";
import like from "@/assets/images/like.png";
// import call from "@/assets/images/call.png";
// import paperplane from "@/assets/images/paperplane.png";

export default function BuildingDetails({ building }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
            <button>
              <Image src={like} alt="like" />
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
      </main>
      <Footer />
    </div>
  );
}
