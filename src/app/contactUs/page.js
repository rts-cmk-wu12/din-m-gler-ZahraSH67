import ContactHeader from "@/components/ContactHeader"
import OptionsHeader from "@/components/OptionsHeader" 
import Title from "@/components/Title"
import Footer from "@/components/Footer"
import call from "@/assets/images/HeaderCall.png"
import email from "@/assets/images/Vector.png"
import location from "@/assets/images/location.png"
import Image from "next/image"
import map from "@/assets/images/Map.png"


export default function ContactUs() {
  return (
    <div>
      <ContactHeader />
      <OptionsHeader />
      <Title title="Kontakt os" />

      <main className="">
        <h2 className="font-bold text-lg mx-[6em]">Vi sidder klar til at besvare dine spørgsmål</h2>
        <p className="text-xs mt-[1.5em] mx-[9em]">Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. <br/> 
        Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>

        <section className="flex  justify-center gap-8 lg:gap-[4em] p-4 mx-[6em]">
             <div className="flex flex-col justify-center w-full lg:w-[70%] my-[2em] border-2 border-gray-300 p-4">
             <div className="">
               
                <form className="">
                  
                  <div className="flex flex-col lg:flex-row gap-[2em] mb-[1em]">

                      <label className="flex flex-col w-full"> Navn
                        <input type="text"
                          placeholder="Indtast navn"
                          className="border-2 border-gray-300 mt-[0.5em] p-[0.5em]"
                        />
                      </label>

                      <label className="flex flex-col w-full"> Email
                        <input type="email"
                          placeholder="Indtast email"
                          className="border-2 border-gray-300 mt-[0.5em] p-[0.5em]"
                        />
                      </label>

                  </div>
                

                   <label className="flex flex-col mb-[1em]"> Emne
                    <input type="text"
                       placeholder="Indtast emne"
                       className="border-2 border-gray-300 mt-[0.5em] p-[0.5em]"
                       />
                  </label>

                  <label className="flex flex-col"> Besked
                    <input type="text"
                      placeholder="Indtast din besked... ."
                      className="border-2 border-gray-300 mt-[0.5em] p-[1em] pb-[8em]"
                  
                    />
                  </label>

                  <div className="mt-[1em]">
                    <input type="checkbox" id="confirm" name="confirm"/>
                    <label htmlFor="confirm" className="ml-2">Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.</label>
                  </div>

                  
                </form>

                <button className="bg-customBlue text-white my-[2em] w-[10em] h-[4em] text-xs">
                  Send besked</button>
              </div>
             </div>


             <div className="flex flex-col justify-center w-full lg:w-[30%] my-[2em] border-2 border-gray-300 p-4">


                    {/* phone */}
                <div className="flex flex-col items-center py-[2em]">
                    <div className=" flex justify-center items-center bg-customBlue rounded-full w-[2.5em] h-[2.5em]">
                        <Image src={call} alt="call icon" className=""/>
                    </div>
                    <h3 className="font-bold text-sm mt-[0.5em] mb-[1em]">Ring til os</h3>
                    <a href="tel:++45 7070 4000" className="hover:underline text-xs">
                        ++45 7070 4000
                     </a>
                     <div className="w-[10em] mx-auto border-b-2 border-gray-200 mt-[2em] mb-[1em]"></div>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center py-[2em]">
                    <div className=" flex justify-center items-center bg-customBlue rounded-full w-[2.5em] h-[2.5em]">
                        <Image src={email} alt="email icon"/>
                    </div>
                    <h3 className="font-bold text-sm mt-[0.5em] mb-[1em]">send en mail</h3>
                    <a href="mailto:4000@dinmaegler.com" className="hover:underline text-xs">
                        4000@dinmaegler.com
                    </a>
                    <div className='w-[10em] mx-auto border-b-2 border-gray-200 mt-[2em] mb-[1em]'></div>
                </div> 

              {/* Location */}
                <div className="flex flex-col items-center py-[2em] ">
                    <div className=" flex justify-center items-center bg-customBlue rounded-full w-[2.5em] h-[2.5em]">
                        <Image src={location} alt="location icon"/>
                    </div>
                    <h3 className="font-bold text-sm mt-[0.5em] mb-[1em]">Besøg butikken</h3>
                    <a
                        href="https://www.google.com/maps?q=Stændertorvet+78,+4000+Roskilde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:underline text-xs"
                        >
                        Stændertorvet 78, 4000 Roskilde
                    </a>
                </div> 

             </div>
             </section>
             <div 
                style={{ backgroundImage: `url(${map.src})` }}
                class="w-full h-[300px]  bg-cover bg-center">
             </div>
      </main>
      <Footer />
    </div>
  )
}
