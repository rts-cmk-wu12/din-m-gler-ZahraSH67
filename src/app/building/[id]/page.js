// // app/building/[id]/page.js
// 'use client'
// import { useState } from 'react';
// import { notFound } from 'next/navigation';
// import ContactHeader from '@/components/ContactHeader';
// import OptionsHeader from '@/components/OptionsHeader';
// import Footer from '@/components/Footer';
// import Image from 'next/image';
// import gallery from "@/assets/images/gallery.png"
// import plan from "@/assets/images/plan.png"
// import idLocation from "@/assets/images/idLocation.png"
// import like from "@/assets/images/like.png"
// import call from "@/assets/images/call.png"
// import paperplane from "@/assets/images/paperplane.png"

// async function BuildingDetails({ params }) {
//   const { id } = await params; // Get the building ID from the URL

//   // Fetch the building data based on the ID
//   const res = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);

//   if (!res.ok) {
//     // If no data is found, return a 404 page
//     notFound();
//   }

//   const building = await res.json();
//   const [isGalleryOpen, setIsGalleryOpen] = useState(false); // State to toggle gallery modal
//   console.log("BUILDIN:", building)

//   // Function to open the gallery
//   const openGallery = () => {
//     setIsGalleryOpen(true);
//   };

//   // Function to close the gallery
//   const closeGallery = () => {
//     setIsGalleryOpen(false);
//   };


//   return (
//     <div>
//       <ContactHeader />
//       <OptionsHeader />
//       <main>
//         <div >
//           <Image 
//           src={building.images[0].url}
//           alt={`Image of ${building.adress1}`}  
//           width={800}
//           height={300}
//           className='w-full '/>
//         </div>

//         <div className='flex justify-evenly items-center mt-[2em]'>
//           <div>
//             <p className='font-bold text-xs'>{building.adress1}</p>
//             <p className='font-bold text-xs'>{building.postalcode} {building.city}</p>
//           </div>
//           <div className='flex justify-between w-[20em]'>
//             <button>
//               <Image src={gallery} alt='gallery'/>
//             </button>
//             <button>
//               <Image src={plan} alt='plan'/>
//             </button>
//             <button>
//               <Image src={idLocation} alt='idLocation'/>
//             </button>
//             <button>
//               <Image src={like} alt='like'/>
//             </button>
//           </div>
//           <div className='font-bold'>kr. {building.price}</div>
//         </div>

//         {/* Gallery Modal */}
//         {isGalleryOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg relative max-w-4xl w-full">
//               <button onClick={closeGallery} className="absolute top-2 right-2 text-white bg-black rounded-full p-2">
//                 X
//               </button>
//               <div className="grid grid-cols-3 gap-4">
//                 {building.images.map((image, index) => (
//                   <div key={index} className="relative">
//                     <Image 
//                       src={image.url} 
//                       alt={`Image ${index + 1}`} 
//                       width={300} 
//                       height={200} 
//                       className="w-full h-auto object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="w-[50em] border-b-2 border-gray-200 mt-[2em] mx-auto"></div>



//         <div className="overflow-x-auto mx-[12em] mt-[2em]">
//       <table className="min-w-full table-auto border-collapse ">
//         <tbody className="">
//           <tr className="">
//             <td className="  py-2">Sagsnummer:</td>
//             <td className="  py-2">{building.id}</td>
//             <td className="  py-2">Kælder:</td>
//             <td className="  py-2">{building.basementsize}</td>
//             <td className="  py-2">udbetaing:</td>
//             <td className="  py-2">kr. {building.payment}</td>
//           </tr>

//           <tr className="">
//             <td className="  py-2">Boligareal:</td>
//             <td className="  py-2">{building.lotsize} m²</td>
//             <td className="  py-2">Byggeår:</td>
//             <td className="  py-2">{building.built}</td>
//             <td className="  py-2">Brutto ex ejerudgift:</td>
//             <td className="  py-2">kr. {building.netto}</td>
//           </tr>


//           <tr className="">
//             <td className=" py-2">Grundareal:</td>
//             <td className=" py-2">{building.livingspace} m²</td>
//             <td className=" py-2">Ombygget:</td>
//             <td className=" py-2">{building.remodel}</td>
//             <td className=" py-2">Netto ex ejerudgift:</td>
//             <td className=" py-2">kr. {building.netto}</td>
//           </tr>  

//           <tr className="">
//             <td className="  py-2">Rum/værelser:</td>
//             <td className="  py-2">{building.rooms}</td>
//             <td className="py-2">Energimærke</td>
//             <td className="py-2">{building.energylabel}</td>
//             <td className="  py-2">Ejerudgifter:</td>
//             <td className="  py-2">kr. {building.cost}</td>
//           </tr>

//           <tr className="">
//             <td className="  py-2">Antal Plan:</td>
//             <td className="  py-2"></td>
//           </tr>

//         </tbody>
        
//       </table>
//     </div>



//     <section className='flex  md:flex-row gap-[2em] mx-[12em] mt-[2em]'>
//       <div className='flex-1'>
//         <h2 className='font-bold text-lg'>Beskrivelse</h2>
//         {/* <p>{building.description}</p> */}
//         {building.description && (() => {
//             // Split the description into sentences using regex
//             const sentences = building.description.match(/[^.!?]+[.!?]+/g) || [building.description];
            
//             // Calculate the middle index
//             const middleIndex = Math.ceil(sentences.length / 2);
            
//             // Join sentences for each part
//             const firstPart = sentences.slice(0, middleIndex).join(' ');
//             const secondPart = sentences.slice(middleIndex).join(' ');

//             return (
//               <>
//                 <p>{firstPart}</p>
//                 <p className="mt-4">{secondPart}</p>
//               </>
//             );
//           })()}
//       </div>

//       <div className='flex-1 '>
//         <h2 className='font-bold text-lg mb-[1em]'>Ansvalig mægler </h2>
//         <div className='flex border border-gray-200 h-auto p-[2em]'>
     
//           <Image src={building.agent.image.url} alt="" width={200} height={200} className='h-auto'/>
//           {/* <div className='absolute bottom-0 left-0 bg-customBlue text-white text-xs px-2 py-1 w-[60%]'>GOALLLLLLLLLLLLLLLLLLLLLLLLL</div> */}
    
          
//           <div className='p-[1em]'>
//             <p className='font-bold text-sm'>{building.agent.name}</p>
//             <p className='text-xs text-gray-600'>{building.agent.title}</p>

//             <div className='w-[2em] border-b-2 border-gray-200 mt-[2em] mb-[1em]'></div>

//             <div className='flex items-center gap-[1em] text-xs	mb-[1em]'>
//               <Image src={call} alt="call" className='w-[1em] h-[1em]'/>
//               <a href={`tel:${building.agent.phone}`} 
//                 className="text-black hover:underline">
//                 {building.agent.phone}
//               </a>
//             </div>

        
//             <div className='flex items-center gap-[1em] text-xs	'>
//               <Image src={paperplane} alt="paperplane" className='w-[1em] h-[1em]'/>
//               <a  href={`mailto:${building.agent.email}`}  
//                 className="text-black hover:underline">
//                 {building.agent.email}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
        


//       </main>
//       {/* <h1>{building.adress1}</h1>
//       <p>{building.description}</p>
//       <div>
//         <h2>Details</h2>
//         <p>Price: {building.price} kr.</p>
//         <p>Energy Label: {building.energylabel}</p>
//         <p>Rooms: {building.rooms}</p>
//         <p>Size: {building.floorplan.size} m²</p>
     
//       </div> */}
//       <Footer />
//     </div>
//   );
// }

// export default BuildingDetails;














// 'use client';

// import { useState, useEffect } from 'react';
// import { notFound } from 'next/navigation';
// import ContactHeader from '@/components/ContactHeader';
// import OptionsHeader from '@/components/OptionsHeader';
// import Footer from '@/components/Footer';
// import Image from 'next/image';
// import gallery from "@/assets/images/gallery.png";
// import plan from "@/assets/images/plan.png";
// import idLocation from "@/assets/images/idLocation.png";
// import like from "@/assets/images/like.png";
// import call from "@/assets/images/call.png";
// import paperplane from "@/assets/images/paperplane.png";

// function BuildingDetails({ params }) {
//   const [building, setBuilding] = useState(null);
//   const [isGalleryOpen, setIsGalleryOpen] = useState(false);
//   const { id } = params;

//   useEffect(() => {
//     // Fetch the building data based on the ID
//     const fetchBuilding = async () => {
//       try {
//         const res = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);
//         if (!res.ok) {
//           notFound(); // Trigger a 404 if no data is found
//           return;
//         }
//         const data = await res.json();
//         setBuilding(data);
//       } catch (error) {
//         console.error("Failed to fetch building data:", error);
//       }
//     };

//     fetchBuilding();
//   }, [id]);

//   // Function to open the gallery
//   const openGallery = () => {
//     setIsGalleryOpen(true);
//   };

//   // Function to close the gallery
//   const closeGallery = () => {
//     setIsGalleryOpen(false);
//   };

//   if (!building) {
//     return <div>Loading...</div>; // Show a loading state while fetching data
//   }

//   return (
//     <div>
//       <ContactHeader />
//       <OptionsHeader />
//       <main>
//         <div>
//           <Image
//             src={building.images[0].url}
//             alt={`Image of ${building.adress1}`}
//             width={800}
//             height={300}
//             className="w-full"
//           />
//         </div>

//         <div className="flex justify-evenly items-center mt-[2em]">
//           <div>
//             <p className="font-bold text-xs">{building.adress1}</p>
//             <p className="font-bold text-xs">{building.postalcode} {building.city}</p>
//           </div>
//           <div className="flex justify-between w-[20em]">
//             <button onClick={openGallery}>
//               <Image src={gallery} alt="gallery" />
//             </button>
//             <button>
//               <Image src={plan} alt="plan" />
//             </button>
//             <button>
//               <Image src={idLocation} alt="idLocation" />
//             </button>
//             <button>
//               <Image src={like} alt="like" />
//             </button>
//           </div>
//           <div className="font-bold">kr. {building.price}</div>
//         </div>

//         {/* Gallery Modal */}
//         {isGalleryOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg relative max-w-4xl w-full">
//               <button
//                 onClick={closeGallery}
//                 className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
//               >
//                 X
//               </button>
//               <div className="grid grid-cols-3 gap-4">
//                 {building.images.map((image, index) => (
//                   <div key={index} className="relative">
//                     <Image
//                       src={image.url}
//                       alt={`Image ${index + 1}`}
//                       width={300}
//                       height={200}
//                       className="w-full h-auto object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="w-[50em] border-b-2 border-gray-200 mt-[2em] mx-auto"></div>
//         {/* Rest of your table and details */}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default BuildingDetails;











// 'use client';

// import { useState, useEffect } from 'react';
// import { notFound } from 'next/navigation';
// import ContactHeader from '@/components/ContactHeader';
// import OptionsHeader from '@/components/OptionsHeader';
// import Footer from '@/components/Footer';
// import Image from 'next/image';
// import gallery from "@/assets/images/gallery.png";
// import plan from "@/assets/images/plan.png";
// import idLocation from "@/assets/images/idLocation.png";
// import like from "@/assets/images/like.png";
// import call from "@/assets/images/call.png";
// import paperplane from "@/assets/images/paperplane.png";

// export default  function BuildingDetails({ params }) {
//   const [building, setBuilding] = useState(null);
//   const [isGalleryOpen, setIsGalleryOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
//   const { id } = params;

//   useEffect(() => {
//     // Fetch the building data based on the ID
//     const fetchBuilding = async () => {
//       try {
//         const res = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);
//         if (!res.ok) {
//           notFound(); // Trigger a 404 if no data is found
//           return;
//         }
//         const data = await res.json();
//         setBuilding(data);
//       } catch (error) {
//         console.error("Failed to fetch building data:", error);
//       }
//     };

//     fetchBuilding();
//   }, [id]);

//   // Function to open the gallery
//   const openGallery = () => {
//     setIsGalleryOpen(true);
//     setCurrentSlide(0); // Reset to the first slide when gallery opens
//   };

//   // Function to close the gallery
//   const closeGallery = () => {
//     setIsGalleryOpen(false);
//   };

//   // Navigate to the previous slide
//   const goToPrevious = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide((prevSlide) => prevSlide - 1);
//     }
//   };

//   // Navigate to the next slide
//   const goToNext = () => {
//     if (currentSlide < building.images.length - 1) {
//       setCurrentSlide((prevSlide) => prevSlide + 1);
//     }
//   };

//   if (!building) {
//     return <div>Loading...</div>; // Show a loading state while fetching data
//   }

//   return (
//     <div>
//       <ContactHeader />
//       <OptionsHeader />
//       <main>
//         <div>
//           <Image
//             src={building.images[0].url}
//             alt={`Image of ${building.adress1}`}
//             width={800}
//             height={300}
//             className="w-full"
//           />
//         </div>

//         <div className="flex justify-evenly items-center mt-[2em]">
//           <div>
//             <p className="font-bold text-xs">{building.adress1}</p>
//             <p className="font-bold text-xs">{building.postalcode} {building.city}</p>
//           </div>
//           <div className="flex justify-between w-[20em]">
//             <button onClick={openGallery}>
//               <Image src={gallery} alt="gallery" />
//             </button>
//             <button onClick={openGallery}>
//               <Image src={plan} alt="plan" />
//             </button>
//             <button>
//               <Image src={idLocation} alt="idLocation" />
//             </button>
//             <button>
//               <Image src={like} alt="like" />
//             </button>
//           </div>
//           <div className="font-bold">kr. {building.price}</div>
//         </div>

//         {/* Gallery Modal */}
// {isGalleryOpen && (
//   <div
//     className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
//     onClick={closeGallery} // Allow closing by clicking outside the modal
//   >
//     {/* Popup Container */}
//     <div
//       className="relative bg-white max-w-[90%] max-h-[90%] w-[900px] h-[500px] rounded-lg shadow-lg overflow-hidden"
//       onClick={(e) => e.stopPropagation()} // Prevent close on clicking inside modal
//     >
//       {/* Close Button */}
//       <button
//         onClick={closeGallery}
//         className="absolute top-3 right-3 text-white bg-black rounded-full p-2 z-10 hover:bg-red-500"
//       >
//         ✕
//       </button>

//       {/* Slider Container */}
//       <div className="relative w-full h-full flex justify-center items-center bg-gray-100">
//         {/* Left Arrow */}
//         <button
//           onClick={goToPrevious}
//           disabled={currentSlide === 0}
//           className={`absolute left-5 p-2 rounded-full bg-black text-white z-10 hover:bg-gray-800 ${
//             currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           &#8592;
//         </button>

//         {/* Current Image */}
//         <Image
//           src={building.images[currentSlide].url}
//           alt={`Slide ${currentSlide + 1}`}
//           width={800}
//           height={500}
//           className="max-w-full max-h-full object-contain"
//         />

//         {/* Right Arrow */}
//         <button
//           onClick={goToNext}
//           disabled={currentSlide === building.images.length - 1}
//           className={`absolute right-5 p-2 rounded-full bg-black text-white z-10 hover:bg-gray-800 ${
//             currentSlide === building.images.length - 1
//               ? "opacity-50 cursor-not-allowed"
//               : ""
//           }`}
//         >
//           &#8594;
//         </button>
//       </div>

//       {/* Slide Index */}
//       <div className="absolute bottom-2 left-0 right-0 text-center bg-white bg-opacity-80 text-black py-2">
//         <p>
//           Slide {currentSlide + 1} of {building.images.length}
//         </p>
//       </div>
//     </div>
//   </div>
// )}


//         <div className="w-[50em] border-b-2 border-gray-200 mt-[2em] mx-auto"></div>
//         {/* Rest of your table and details */}
    





//         <div className="overflow-x-auto mx-[12em] mt-[2em]">
//       <table className="min-w-full table-auto border-collapse ">
//         <tbody className="">
//     <tr className="">
//       <td className="  py-2">Sagsnummer:</td>
//       <td className="  py-2">{building.id}</td>
//           <td className="  py-2">Kælder:</td>
//           <td className="  py-2">{building.basementsize}</td>
//           <td className="  py-2">udbetaing:</td>
//           <td className="  py-2">kr. {building.payment}</td>
//         </tr>
//         <tr className="">
//           <td className="  py-2">Boligareal:</td>
//           <td className="  py-2">{building.lotsize} m²</td>
//           <td className="  py-2">Byggeår:</td>
//           <td className="  py-2">{building.built}</td>
//           <td className="  py-2">Brutto ex ejerudgift:</td>
//           <td className="  py-2">kr. {building.netto}</td>
//         </tr>
//            <tr className="">
//              <td className=" py-2">Grundareal:</td>
//              <td className=" py-2">{building.livingspace} m²</td>
//              <td className=" py-2">Ombygget:</td>
//              <td className=" py-2">{building.remodel}</td>
//              <td className=" py-2">Netto ex ejerudgift:</td>
//              <td className=" py-2">kr. {building.netto}</td>
//            </tr>  
//            <tr className="">
//              <td className="  py-2">Rum/værelser:</td>
//              <td className="  py-2">{building.rooms}</td>
//              <td className="py-2">Energimærke</td>
//              <td className="py-2">{building.energylabel}</td>
//              <td className="  py-2">Ejerudgifter:</td>
//              <td className="  py-2">kr. {building.cost}</td>
//            </tr>
//            <tr className="">
//              <td className="  py-2">Antal Plan:</td>
//              <td className="  py-2"></td>
//            </tr>
//          </tbody>
      
//        </table>
//      </div>
//      <section className='flex  md:flex-row gap-[2em] mx-[12em] mt-[2em]'>
//        <div className='flex-1'>
//          <h2 className='font-bold text-lg'>Beskrivelse</h2>
//          {/* <p>{building.description}</p> */}
//          {building.description && (() => {
//              // Split the description into sentences using regex
//           const sentences = building.description.match(/[^.!?]+[.!?]+/g) || [building.description];
          
//           // Calculate the middle index
//           const middleIndex = Math.ceil(sentences.length / 2);
          
//           // Join sentences for each part
//           const firstPart = sentences.slice(0, middleIndex).join(' ');
//           const secondPart = sentences.slice(middleIndex).join(' ');
//           return (
//             <>
//               <p>{firstPart}</p>
//               <p className="mt-4">{secondPart}</p>
//             </>
//             );
//           })()}
//       </div>

//       <div className='flex-1 '>
//         <h2 className='font-bold text-lg mb-[1em]'>Ansvalig mægler </h2>
//         <div className='flex border border-gray-200 h-auto p-[2em]'>
     
//           <Image src={building.agent.image.url} alt="" width={200} height={200} className='h-auto'/>
//           {/* <div className='absolute bottom-0 left-0 bg-customBlue text-white text-xs px-2 py-1 w-[60%]'>GOALLLLLLLLLLLLLLLLLLLLLLLLL</div> */}
    
          
//           <div className='p-[1em]'>
//             <p className='font-bold text-sm'>{building.agent.name}</p>
//             <p className='text-xs text-gray-600'>{building.agent.title}</p>

//             <div className='w-[2em] border-b-2 border-gray-200 mt-[2em] mb-[1em]'></div>

//             <div className='flex items-center gap-[1em] text-xs	mb-[1em]'>
//               <Image src={call} alt="call" className='w-[1em] h-[1em]'/>
//               <a href={`tel:${building.agent.phone}`} 
//                 className="text-black hover:underline">
//                 {building.agent.phone}
//               </a>
//             </div>

        
//             <div className='flex items-center gap-[1em] text-xs	'>
//               <Image src={paperplane} alt="paperplane" className='w-[1em] h-[1em]'/>
//               <a  href={`mailto:${building.agent.email}`}  
//                 className="text-black hover:underline">
//                 {building.agent.email}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
        


//       </main>
  
//       <Footer />
//     </div>
//   );
// }





// app/building/[id]/page.js
import BuildingDetails from "@/components/BuildingDetails";

async function fetchBuildingData(id) {
  const res = await fetch(`https://dinmaegler.onrender.com/homes/${id}`, {
    next: { revalidate: 60 }, // Optional: Enables revalidation for ISR
  });
  if (!res.ok) {
    throw new Error('Failed to fetch building data');
  }
  return res.json();
}

export default async function BuildingPage({ params }) {
  const { id } = await params;
  const building = await fetchBuildingData(id); // Fetch the building data
  console.log("BUILDING:", building)
  return <BuildingDetails building={building} />;
}
