
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import HeaderCall from "@/assets/images/HeaderCall.png";
import Vector from "@/assets/images/Vector.png";
import location from "@/assets/images/location.png";
import Link from "next/link";
import DMS from "@/assets/images/DMS.png";

export default function Footer() {
  return (

    <>
      <footer className="gap-4 min-h-[50vh] grid grid-cols-2 grid-rows-3 bg-gray-200 mb-8">

        <section className="col-span-2  px-[10em] py-10">
            <Image src={logo} alt="logo" width={200} height={200}/>
            <p className="mt-[1em] text-sm min-w-[15em]">
              There are many variations of passages of Lorem Ipsum available, but the
              majority have <br/> suffered alteration in some form, by injected humour,or
              randomised words.
            </p>
        </section>


       <section className="col-start-2  pl-4 min-w-[15em]">

           <h3 className="font-bold mb-4">Quick Links</h3>
           <div className="flex flex-col space-y-2 text-xs">
             <Link href="/" className="hover:underline">
               Boliger til salg
             </Link>
             <Link href="/" className="hover:underline">
               Mæglere
             </Link>
             <Link href="/" className="hover:underline">
               Kontakt os
             </Link>
             <Link href="/" className="hover:underline">
               Log ind / bliv bruger
             </Link>
           </div>

       </section>

       <section className="grid grid-cols-2 bg-white row-start-3 row-end-4 col-start-1 col-end-3 "></section>

       <section className="grid grid-cols-2 bg-white row-start-3 row-end-4 col-start-2 col-end-4 ">

         <div className="">
           <span className="text-xs text-gray-600">Medlem af</span>
           <Image src={DMS} alt="DMS icon" />
           <span className="text-xs text-gray-600">Dansk Mægler Sammenslutning</span>
         </div>
    
       </section>


       <section className="ml-20 mr-20 mb-10 min-w-[35vw] bg-white row-start-2 row-end-4 col-start-1 col-end-2 shadow-lg px-[2em] py-[2em]">

          {/* Title */}
           <h3 className="text-lg font-semibold text-gray-800 mb-4">Kontakt os</h3>

          {/* Telephone */}
           <div className="flex items-center gap-2 mb-4">
                <div className="bg-customBlue w-8 h-8 flex justify-center items-center rounded-full">
                  <Image src={HeaderCall} alt="headercall" height={100} width={100} className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Ring til os</p>
                  <a href="tel:+45 7070 4000" className="text-black text-xs font-bold hover:underline">
                    +45 7070 4000
                  </a>
                </div>
           </div>

          {/* Email */}
           <div className="flex items-center gap-2 mb-4">
                <div className="bg-customBlue w-8 h-8 flex justify-center items-center rounded-full">
                  <Image src={Vector} alt="vector" height={100} width={100} className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Send en mail</p>
                  <a href="mailto:4000@dinmaegler.com" className="text-black text-xs font-bold hover:underline">
                    4000@dinmaegler.com
                  </a>
                </div>
           </div>

          {/* Address */}
           <div className="flex items-center gap-2 mb-4">
             <div className="bg-customBlue w-8 h-8 flex justify-center items-center rounded-full">
               <Image src={location} alt="location" height={100} width={100} className="w-4 h-4" />
             </div>
             <div>
               <p className="text-xs text-gray-600">Butik</p>
               <a
             href="https://www.google.com/maps?q=Stændertorvet+78,+4000+Roskilde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-xs font-bold hover:underline"
                  >
                    Stændertorvet 78, 4000 Roskilde
                  </a>
                </div>
              </div>

               <p className="text-sm text-gray-600 leading-relaxed">
                 Din Mægler Roskilde, er din <br /> boligibutik i lokalområdet.
               </p>


         </section>

         </footer>

     
      <div className="text-center bg-customBlue h-full py-[2em]">
          <p className="text-sm text-white">Layout By Jit Banik 2020</p>
        </div>

     </>
  
  );
}





// import Image from "next/image";
// import logo from "@/assets/images/logo.png";
// import HeaderCall from "@/assets/images/HeaderCall.png";
// import Vector from "@/assets/images/Vector.png";
// import location from "@/assets/images/location.png";
// import Link from "next/link";
// import DMS from "@/assets/images/DMS.png";

// export default function Footer() {
//   return (
//     <>
//       <footer className="bg-gray-200 py-10">
//         <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-20">
//           {/* بخش لوگو و توضیحات */}
//           <div>
//             <Image src={logo} alt="logo" width={200} height={200} />
//             <p className="mt-4 text-sm text-gray-600">
//               There are many variations of passages of Lorem Ipsum available,
//               but the majority have suffered alteration in some form, by
//               injected humour, or randomised words.
//             </p>
//           </div>

//           {/* لینک‌های سریع */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//             <div className="flex flex-col space-y-2">
//               <Link href="/" className="text-sm text-gray-600 hover:underline">
//                 Boliger til salg
//               </Link>
//               <Link href="/" className="text-sm text-gray-600 hover:underline">
//                 Mæglere
//               </Link>
//               <Link href="/" className="text-sm text-gray-600 hover:underline">
//                 Kontakt os
//               </Link>
//               <Link href="/" className="text-sm text-gray-600 hover:underline">
//                 Log ind / bliv bruger
//               </Link>
//             </div>
//           </div>

//           {/* بخش تماس */}
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-lg font-bold text-gray-800 mb-6">Kontakt os</h3>

//             {/* شماره تلفن */}
//             <div className="flex items-center gap-4 mb-4">
//               <div className="bg-blue-500 w-10 h-10 flex justify-center items-center rounded-full">
//                 <Image
//                   src={HeaderCall}
//                   alt="Phone Icon"
//                   width={16}
//                   height={16}
//                   className="w-4 h-4"
//                 />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Ring til os</p>
//                 <a
//                   href="tel:+45 7070 4000"
//                   className="text-sm font-bold text-black hover:underline"
//                 >
//                   +45 7070 4000
//                 </a>
//               </div>
//             </div>

//             {/* ایمیل */}
//             <div className="flex items-center gap-4 mb-4">
//               <div className="bg-blue-500 w-10 h-10 flex justify-center items-center rounded-full">
//                 <Image
//                   src={Vector}
//                   alt="Email Icon"
//                   width={16}
//                   height={16}
//                   className="w-4 h-4"
//                 />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Send en mail</p>
//                 <a
//                   href="mailto:4000@dinmaegler.com"
//                   className="text-sm font-bold text-black hover:underline"
//                 >
//                   4000@dinmaegler.com
//                 </a>
//               </div>
//             </div>

//             {/* آدرس */}
//             <div className="flex items-center gap-4">
//               <div className="bg-blue-500 w-10 h-10 flex justify-center items-center rounded-full">
//                 <Image
//                   src={location}
//                   alt="Location Icon"
//                   width={16}
//                   height={16}
//                   className="w-4 h-4"
//                 />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Butik</p>
//                 <a
//                   href="https://www.google.com/maps?q=Stændertorvet+78,+4000+Roskilde"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm font-bold text-black hover:underline"
//                 >
//                   Stændertorvet 78, 4000 Roskilde
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* بخش DMS */}
//           <div className="flex flex-col items-center">
//             <span className="text-sm text-gray-600">Medlem af</span>
//             <Image src={DMS} alt="DMS Logo" width={100} height={50} />
//             <span className="text-sm text-gray-600 mt-2">
//               Dansk Mægler Sammenslutning
//             </span>
//           </div>
//         </div>

//         {/* بخش پایانی */}
//         <div className="bg-blue-500 py-4 mt-10 text-center">
//           <p className="text-sm text-white">Layout By Jit Banik 2020</p>
//         </div>
//       </footer>
//     </>
//   );
// }





        


