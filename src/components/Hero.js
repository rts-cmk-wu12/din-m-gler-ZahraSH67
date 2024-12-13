'use client'
// next/navigation
import hero from "@/assets/images/hero.jpg"
import { useState} from "react";
import { useRouter } from "next/navigation";


export default function Hero() {

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

    const handleSearch = () => {
      if (searchTerm.trim()) {
        router.push(`/buildingForSell/search?search=${encodeURIComponent(searchTerm)}`);
      }
    };


  return (
    <div className="relative h-screen bg-gray-200">
      {/* className="relative h-screen bg-gray-200" */}
      {/* <Image src={hero} alt="hero"/> */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero.src})`, // Replace with your image path
          filter: "brightness(50%) grayscale(80%)", // Low clarity and gray shade
        }}
      >
        {/* className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero.src})`, // Replace with your image path
          filter: "brightness(50%) grayscale(80%)", // Low clarity and gray shade
        }} */}
      </div>


       {/* Overlay (optional) */}
       <h1 className="absolute inset-0  text-white text-3xl text-center mt-[4em]">
        Søg
        efter din drømmebolig</h1>

          {/* Content */}
          <div className="relative flex items-center justify-center h-full">
            <div className="bg-white p-4 shadow-lg max-w-2xl w-full">
                <p className="font-bold mb-[1em]"> Søg blandt 158 boliger til salg i 74 butikker </p>
                <p className="mb-[0.5em]">Hvad skal din næste bolig indeholde</p>
                <div className="flex gap-[0.5em]">
                  <input
                      type="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
                    />
                  <button onClick={handleSearch} className="bg-customBlue text-white px-6 py-3 hover:bg-blue-600">
                      Søg
                  </button>
                </div>
            
            </div>
          </div>



    </div>
  )
}






// 'use client'
// // next/navigation
// import hero from "@/assets/images/hero.jpg"
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Hero() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const router = useRouter();

//   const handleSearch = () => {
//     if (searchTerm.trim()) {
//       // اضافه کردن رشته جستجو به URL به صورت Query
//       router.push(`/buildingForSale/search?search=${encodeURIComponent(searchTerm)}`);
//     }
//   };

//   return (
//     <div className="relative h-screen bg-gray-200">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${hero.src})`,
//           filter: "brightness(50%) grayscale(80%)",
//         }}
//       ></div>

//       {/* Overlay (optional) */}
//       <h1 className="absolute inset-0 text-white text-3xl text-center mt-[4em]">
//         Søg efter din drømmebolig
//       </h1>

//       {/* Content */}
//       <div className="relative flex items-center justify-center h-full">
//         <div className="bg-white p-4 shadow-lg max-w-2xl w-full">
//           <p className="font-bold mb-[1em]">
//             Søg blandt 158 boliger til salg i 74 butikker
//           </p>
//           <p className="mb-[0.5em]">
//             Hvad skal din næste bolig indeholde
//           </p>
//           <div className="flex gap-[0.5em]">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
//               className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={handleSearch}
//               className="bg-customBlue text-white px-6 py-3 hover:bg-blue-600"
//             >
//               Søg
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

