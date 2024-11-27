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
        <Link href="/buildingForSell">
             <li>Boliger til salg</li>
        </Link>
        <Link href="/agents">
            <li>Mæglere</li>
        </Link>
        <Link href="/">
            <li>Mine favoritter</li>
        </Link>
        <Link href="/">
            <li>Kontakt os</li>
        </Link>
      </ul>

    </div>
  )
}
