import Image from "next/image";
import logo from "@/assets/images/logo.png"
import Link from "next/link";


export default function OptionsHeader() {
  return (
    <div className="flex justify-evenly items-center h-[4em] px-[2em] ">

      <Link href="/">
        <Image src={logo} alt="logo" className="w-[12em] h-[2em]"/>
      </Link>
     


      <ul className="flex justify-between text-xs gap-[2em]">
        <li><Link href="/buildingForSell">Boliger til salg</Link></li>
        <li><Link href="/agents">Mæglere</Link></li>
        <li><Link href="/savedBuildings">Mine favoritter</Link></li>
        <li><Link href="/">Kontakt os</Link></li>
      
      </ul>

    </div>
  )
}
