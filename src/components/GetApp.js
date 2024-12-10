import Image from "next/image";
import playStore from "@/assets/images/playStore.png"
import apple from "@/assets/images/apple.png"
import mixPic from "@/assets/images/mixPic.png"
import Link from "next/link";


export default function GetApp() {
  return (
    <div className="bg-customBlue text-white mt-[8em] flex justify-evenly">
        <div className="pt-[3em]">
            <h2 className="font-bold text-lg ">Hold dig opdateret <br/>
                på salgsprocessen
            </h2>
            <p className="text-xs my-[1em] leading-loose">Når du sælger din bolig hos Din Mægler,
                 kommunikerer du nemt med den <br/> ansvarlige 
                 mægler eller butik med vores app. Her 
                 kan du også se statistik på <br/> interessen 
                 for din bolig i alle vores salgskanaler.
            </p>
            <div className="flex gap-[1em]">
                <Link href="https://play.google.com/store/apps" className="bg-white text-black flex p-[0.5em]">
                    <Image src={playStore} alt="play store icon"/>
                    Google Play
                </Link>
                <Link href="https://www.apple.com/dk/store" className="flex p-[0.5em] border border-gray-200">
                    <Image src={apple} alt="alt"/>
                    Apple Store
                </Link>
            </div>
           
        </div>
        <div className="pt-[3em] pr-[3em]">
            <Image src={mixPic} alt="mixPic" className="w-[16em] h-[16em]"/>
        </div>
      
    </div>
  )
}
