import Image from "next/image";
import  Vector from "@/assets/images/Vector.png"
import HeaderCall from "@/assets/images/HeaderCall.png"
import login from "@/assets/images/login.png"
// import Link from "next/link";

export default function ContactHeader() {
  return (
    <div className="bg-customBlue flex justify-around h-[3em]">
        <div className="flex justify-between gap-[1em]">

        <div className="flex items-center gap-[1em]">
            <Image src={Vector} alt="vector" className="w-[1em] h-[1em]"/>
            <p className="text-white">4000@dinmaegler.com</p>
        </div>

        <div className="flex items-center gap-[1em]">
            <Image src={HeaderCall} alt="headercall" className="w-[1em] h-[1em]"/>
            <p className="text-white">+45 7070 4000</p>
        </div>
        </div>
   
        <div className="flex items-center gap-[1em]">

            <Image src={login} alt="login" className="w-[1em] h-[1em]"/>
            <p className="text-white">Log ind</p>
        </div>
      
    </div>
  )
}

