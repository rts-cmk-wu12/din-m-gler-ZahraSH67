
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
      <div className=" py-10 ">
      {/* Parent Section */}


      <div className="flex flex-col flex-wrap items-center justify-between gap-10 bg-gray-100">
        {/* Logo and Description */}
        <div className="pt-[2em]">
          <Image src={logo} alt="logo" />
          <p className="mt-[1em] ">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have <br/> suffered alteration in some form, by injected humour,or
            randomised words.
          </p>
        </div>

        {/* Contact Box */}
        <div className="flex justify-around mb-[4em] relative">
          <div className="absolute -left-80 -bottom-80 translate-y-4 bg-white shadow-lg w-72 p-6 rounded-md border border-gray-200">
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Kontakt os</h3>

            {/* Telephone */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-customBlue w-8 h-8 flex justify-center items-center rounded-full">
                <Image src={HeaderCall} alt="headercall" className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Ring til os</p>
                <a href="tel:+45 7070 4000" className="text-black hover:underline">
                  +45 7070 4000
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-customBlue w-8 h-8 flex justify-center items-center rounded-full">
                <Image src={Vector} alt="vector" className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Send en mail</p>
                <a href="mailto:4000@dinmaegler.com" className="text-black hover:underline">
                  4000@dinmaegler.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-customBlue w-8 h-8 flex justify-center items-center rounded-full">
                <Image src={location} alt="location" className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Butik</p>
                <a
                  href="https://www.google.com/maps?q=Stændertorvet+78,+4000+Roskilde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  Stændertorvet 78, 4000 Roskilde
                </a>
              </div>
            </div>

            {/* Localized Message */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Din Mægler Roskilde, er din <br /> boligibutik i lokalområdet.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-end ml-[14em]">
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
        </div>

        {/* Membership */}
        <div className="flex flex-col items-end bg-white w-full pr-[25em]">
        <div className="">
          <span className="text-xs text-gray-600">Medlem af</span>
          <Image src={DMS} alt="DMS icon" />
          <span className="text-xs text-gray-600 ">Dansk Mægler Sammenslutning</span>
        </div>
        </div>
        
      </div>

      {/* Footer Bottom */}
    </div>
    <div className="text-center bg-customBlue h-full py-[2em]">
        <p className="text-sm text-white">Layout By Jit Banik 2020</p>
      </div>
    </>
    
  );
}
