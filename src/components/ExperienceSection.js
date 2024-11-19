import Image from "next/image";
import family from "@/assets/images/family.png"
import home from "@/assets/images/home.png"
import house from "@/assets/images/house.png"
import property from "@/assets/images/property.png"
import blackLocation from "@/assets/images/blackLocation.png"
import customer from "@/assets/images/customer.png"


export default function ExperienceSection() {
    return (
      <section className="flex flex-col ">
        {/* md:flex-row items-center justify-between px-6 md:px-20 py-10 */}
        {/* Left Image Section */}


        <article className="flex items-center justify-between px-6 md:px-20 py-10  relative">
        <div className="w-[20em] h-[20em] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-[50%] after:h-[2px] after:bg-[#D3DEE8] after:-translate-x-1/2">  
            <Image
              src={family}
              alt="Family mage"
              className="w-full h-full object-cover"
            />
        </div>
  
        {/* Right Text Content */}
        <div className="flex-1 md:ml-10 mt-10 md:mt-0 text-center md:text-left">
          {/* Heading */}
          <h2 className="text-4xl font-bold">
            Vi har fulgt danskerne hjem <br /> i snart 4 årtier
          </h2>
          {/* Description */}
          <h3 className="font-bold mt-[1em] mb-[1em]">
            Det synes vi siger noget om os! 
          </h3>
            <p className="text-xs mb-[1em]">
            It is a long established fact that a
            reader will be distracted by the  <br/> readable content of a page when
            looking at its layout. The point of <br/> using Lorem Ipsum is that it has
            normal distribution.
            </p>
            <p className="text-xs">It is a long established fact that a reader will be distracted by the <br/> 
               readable content of a page when looking at its layout.
            </p>
          
        
  
          {/* Statistics */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-6">
            {/* Statistic Item */}

            <div className="flex items-center">
              <div className="w-[4em] h-[4em] bg-[#EEF7FF] flex justify-center items-center">
                {/* Replace with icon */}
                <Image src={house} alt="House Sold Icon" />
              </div>
              <div className="ml-4">
                <p className="text-xl font-bold">4829</p>
                <p className="text-gray-600 text-sm">boliger solgt</p>
              </div>
            </div>
  
            {/* Statistic Item */}
            <div className="flex items-center">
              <div className="w-[4em] h-[4em] bg-[#EEF7FF]  flex justify-center items-center">
                {/* Replace with icon */}
                <Image src={home} alt="House for Sale Icon" />
              </div>
              <div className="ml-4">
                <p className="text-xl font-bold">158</p>
                <p className="text-gray-600 text-sm">boliger til salg</p>
              </div>
            </div>
          </div>
        </div>
        </article>

        


        <article className="flex items-center gap-[4em] mt-[2em]">

          <div className="flex gap-[1em]  w-[20em] h-[8em] ml-[8em]">
            <div className="flex justify-center items-center w-[2em] h-[2em] bg-[#EEF7FF] ">
              <Image src={property} alt="property" />
            </div>
            <div>
              <h3 className="font-bold mb-[1em]">Bestil et salgstjek</h3>
              <p className="text-xs max-w-[180px]">Med et Din Mægler Salgstjek 
                  bliver du opdateret på værdien 
                  af din bolig.</p>
            </div>
          </div>

          <div className="flex gap-[1em] w-[20em] h-[8em]">
            <div className="flex justify-center items-center w-[2em] h-[2em] bg-[#EEF7FF]">
                <Image src={blackLocation} alt="location" className="w-[1.5em] h-[1.5em]"/>
            </div>
            <div>
              <h3 className="font-bold mb-[1em]">74 butikker</h3>
              <p className="text-xs max-w-[180px]">Hos Din Mægler er din bolig 
              til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
            </div>
          </div>


          <div className="flex gap-[1em] w-[20em] h-[8em]">
            <div className="flex justify-center items-center w-[2em] h-[2em] bg-[#EEF7FF]">
                <Image src={customer} alt="customer"/>
            </div>
            <div>
              <h3 className="font-bold mb-[1em]">Tilmeld køberkartotek</h3>
              <p className="text-xs max-w-[180px]">Når du er tilmeldt vores køberkartotek, 
                bliver du kontaktet inden en ny bolig bliver annonceret.</p>
            </div>
          </div>

        </article>

      </section>
    );
  }
  