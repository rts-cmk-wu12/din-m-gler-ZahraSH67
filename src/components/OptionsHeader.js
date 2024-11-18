import Image from "next/image";
import logo from "@/assets/images/logo.png"
import Link from "next/link";


export default function OptionsHeader() {
  return (
    <div className="flex justify-around items-center h-[4em]">
      <Image src={logo} alt="logo"/>


      <ul className="flex justify-around w-[30em]">
        <Link href="/">
             <li>Boliger til salg</li>
        </Link>
        <Link href="/">
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
