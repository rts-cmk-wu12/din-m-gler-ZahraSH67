
import giantBuilding from "@/assets/images/giantBuilding.png"
import RightVector from "@/assets/images/RightVector.png"
import Image from "next/image"
export default function Registeration() {
  return (
    <div className=" relative h-[200px] w-full bg-cover bg-center mb-[2em] mt-[2em]"
    style={{ backgroundImage: `url(${giantBuilding.src})` }}
>
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>

       {/* Title text */}
    <div className="relative flex items-center justify-evenly h-full">
        <h2 className="text-white  text-lg  font-bold text-center">
        Tilmeld dig vores nyhedsbrev og <br/>
        hold dig opdateret på boligmarkedet
        </h2>
        <div className="flex ">
                  <input
                      type="text"
                      placeholder="Indtast din email adresse"
                      className="w-full py-3 pl-[1em] pr-[7em] rounded-sm"
                  
                    />
                  <button className="bg-white text-white px-6 py-3 rounded-sm hover:bg-blue-600">
                      <Image src={RightVector} alt=""/>
                  </button>
                </div>

        
    </div>
  
</div>
)

}
