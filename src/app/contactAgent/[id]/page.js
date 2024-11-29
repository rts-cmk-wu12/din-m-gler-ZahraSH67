import ContactHeader from "@/components/ContactHeader";
import Footer from "@/components/Footer";
import OptionsHeader from "@/components/OptionsHeader";
import Title from "@/components/Title";
import Image from "next/image";
import call from "@/assets/images/call.png"
import paperplane from "@/assets/images/paperplane.png"
import love from "@/assets/images/love.png"
import instagram from "@/assets/images/instagram.png"
import linkedIn from "@/assets/images/linkedIn1.png"
import skype from "@/assets/images/skype.png"
import search from "@/assets/images/search.png"
import ErrorPage from "@/components/ErrorPage";


export default async function ContactAgent({ params }) {
  const { id } = params; // Extract ID from URL params
  let agent = null;
  let error = false;

  try {
    const res = await fetch(`https://dinmaegler.onrender.com/agents/${id}`, { cache: "no-store" }); // Ensures fresh data fetching
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    agent = await res.json();
    console.log("Agent:", agent)
  } catch (err) {
    console.error("Fetch error:", err);
    error = true;
  }

  if (error) {
    return <ErrorPage />; // Render ErrorPage if an error occurs
  }

















    // const { id } = await params; // Get the building ID from the URL
  
    // Fetch the building data based on the ID
    // const res = await fetch(`https://dinmaegler.onrender.com/agents/${id}`);
  
    // if (!res.ok) {
      // If no data is found, return a 404 page
    //   notFound();
    // }
  
    // const agent = await res.json();
    // console.log("Agent:", agent)
    return(
        <div>
          <ContactHeader />
          <OptionsHeader />
          <Title title="Kontakt en medarbejder"/>
          
         
          <main className="flex  gap-[1em] mx-[10em] ">
            <section className="w-3/4 border-2 border-gray-300">


                <div className="flex items-start gap-[2em] py-[2em] px-[2em]">

            
                  <div className="flex justify-center">
                    <div className="relative w-64 h-64 shadow-lg overflow-hidden">
                   
                      <Image src={agent.image.url} 
                        alt="Profile"
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                      />

                    
                      <div className="absolute bottom-10 left-0  bg-customBlue text-white flex gap-[1em] py-[0.5em] px-[1em]">
                        {/* Instagram */}
                        <a
                          href="https://instagram.com" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                      <Image src={instagram} alt="instagram icon" width={200} height={200} className="w-[1em] h-[1em]"/>
                        </a>

                  
                        <a
                          href="https://linkedin.com" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Image src={linkedIn} alt="linkedIn icon" width={200} height={200} className="w-[1em] h-[1em]"/>
                        </a>

                      
                        <a
                          href="https://skype.com" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Image src={skype} alt="skype icon" width={200} height={200} className="w-[1em] h-[1em]"/>
                        </a>

                      </div>
                    </div>
                  </div>


                  <div className="">

                    <div>
                      <h2 className="font-bold mb-[1em]">{agent.name}</h2>
                      <p className="text-xs text-gray-500">{agent.title}</p>
                    </div>


                    <div className='w-[2em] border-b-2 border-gray-200 mt-[2em] mb-[1em]'></div>

                        <div className='flex items-center gap-[1em] text-xs	mb-[1em]'>
                          <Image src={call} alt="call" className='w-[1em] h-[1em]'/>
                          <a href={`tel:${agent.phone}`} 
                            className="text-black hover:underline">
                            {agent.phone}
                          </a>
                        </div>


                        <div className='flex items-center gap-[1em] text-xs	'>
                          <Image src={paperplane} alt="paperplane" className='w-[1em] h-[1em]'/>
                          <a  href={`mailto:${agent.email}`}  
                            className="text-black hover:underline">
                            {agent.email}
                          </a>
                        </div>

                    </div>
                    <button className="">
                      <Image src={love} alt="love button" />
                    </button>

                  </div>

             <div className="px-[2em]">
                <h3 className="font-bold mt-[2em]">Om {agent.name}</h3>
                {agent.description && (() => {
           

            const sentences = agent.description.match(/[^.!?]+[.!?]+/g) || [agent.description];
            
          
            const middleIndex = Math.ceil(sentences.length / 2);
            
        
            const firstPart = sentences.slice(0, middleIndex).join(' ');
            const secondPart = sentences.slice(middleIndex).join(' ');

            return (
              <>
                <p>{firstPart}</p>
                <p className="mt-4">{secondPart}</p>
              </>
            );
          })()}
             </div>

             <div className="flex justify-center">
             <div className=" flex justify-center w-11/12 my-[2em] border-2 border-gray-300">
             <div>
                <h3 className="font-bold py-[2em]">Kontakt {agent.name}</h3>
                <form className="">
                  
                  <div className="flex gap-[2em] mb-[1em]">

                      <label className="flex flex-col"> Navn
                        <input type="text"
                          placeholder="Indtast navn"
                          className="border-2 border-gray-300 mt-[0.5em] p-[0.5em]"
                        />
                      </label>

                      <label className="flex flex-col"> Email
                        <input type="email"
                          placeholder="Indtast email"
                          className="border-2 border-gray-300 mt-[0.5em] p-[0.5em]"
                        />
                      </label>

                  </div>
                

                   <label className="flex flex-col mb-[1em]"> Emne
                    <input type="text"
                       placeholder="Hvad drejer din henvendelse sig om?"
                       className="border-2 border-gray-300 mt-[0.5em] p-[0.5em]"
                       />
                  </label>

                  <label className="flex flex-col"> Besked
                    <input type="text"
                      placeholder="Skriv din besked her..."
                      className=" border-2 border-gray-300 mt-[0.5em] pt-[1em] px-[1em] pb-[8em]"
                    />
                  </label>

                </form>


                <button className="bg-customBlue text-white my-[2em] w-[10em] h-[4em] text-xs">Send besked</button>
              </div>
             </div>
             </div>

             
            </section>


          
          <section className="flex flex-col items-center space-y-8 ">
           
            <div className="w-full max-w-md bg-blue-50 p-[1em]">
              <h2 className="text-l font-bold">Search Property</h2>
              <div className="w-[14em] border-b-2 border-gray-200  mx-auto my-[1em]"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full  py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <Image src={search} alt="search icon" />
             
                </span>
              </div>
            </div>

          
            <div className="bg-customBlue text-white flex flex-col items-center py-[4em] px-[2em] text-center"
            
            // className="w-full max-w-md h-[20em] bg-customBlue text-white  text-center"
            >
              <h2 className="text-2xl font-bold mb-2">Find The Best Property</h2>
              <p className="text-lg font-medium mb-4">For Rent Or Buy</p>
              <div className="w-[4em] border-b-2 border-gray-200  mx-auto my-[1em]"></div>
              <p className="text-sm mb-2">Call Us Now</p>
              <a href="tel:+00 123 456 789" className="text-white hover:underline">
              +00 123 456 789
                </a>
            </div>
          </section>
 

          </main>



          <Footer />
        </div>
    )
  
}