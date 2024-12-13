'use client'
import { useState, useEffect } from 'react';
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
import { z } from "zod";
import { useParams } from 'next/navigation';



  export default function ContactAgent() {
    const searchParams = useParams();
    const agentId = searchParams.id; // Extract "id" from query parameters
    console.log("agentId", agentId);

      //State definiation
      const [agent, setAgent] = useState(null);
      const [error, setError] = useState(false);
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        subscribe: false,
      });
      const [errors, setErrors] = useState({});
      const [successMessage, setSuccessMessage] = useState("");
      const [isSubmitting, setIsSubmitting] = useState(false);



      const schema = z.object({
        name: z.string().min(1, {message: "Navn er påkrævet."}),
        email: z.string().min(1, {message:"Email er påkrævet."}).email("Ugyldig emailadresse."),
        subject: z.string().min(1, {message: "Emne er påkrævet."}),
        message: z.string().min(1, {message:"Besked er påkrævet."}),
      });

      useEffect(() => {
        if (!agentId) return;
    
        const fetchAgent = async () => {
          try {
            const res = await fetch(`https://dinmaegler.onrender.com/agents/${agentId}`, { cache: "no-store" });
            if (!res.ok) throw new Error("Failed to fetch data");
            const data = await res.json();
            setAgent(data);
          } catch (err) {
            setError(true);
          }
        };
        fetchAgent();
      }, [agentId]);

      if (error) {
        return <ErrorPage />; // Render ErrorPage if there's an error
      }
    
      if (!agent) {
        return <div>Loading...</div>; // Loading message until agent data is fetched
      }

  
      // Sending form to server
      const handleSubmit = async (e) => {
        e.preventDefault(); 
        // Validation with zod
      const validationResult = schema.safeParse(formData);
      if (!validationResult.success) {
        const zodErrors = validationResult.error.format();
        setErrors(zodErrors);
        return;
      }

      
      
      setIsSubmitting(true);
      setErrors({});
      setSuccessMessage("Din besked er blevet sendt succesfuldt!");
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        subscribe: false,
      });
      
      setIsSubmitting(false);
    };

    const handleInputChange = async (e) => {
      const{id, value} = e.target
      setFormData({...formData,
        [id]: value,});
    }

  
    return(
        <div>
          <ContactHeader />
          <OptionsHeader />
          <Title title="Kontakt en medarbejder"/>
          
         
          <main className="flex flex-col lg:flex-row gap-8 mx-4 lg:mx-20 mt-8">
            <section className="w-full lg:w-2/3 border-2 border-gray-300 p-4">
            {/* w-3/4 border-2 border-gray-300 "> */}
           


                <div className="flex flex-col md:flex-row items-start gap-6">
                {/* flex items-start gap-[2em] py-[2em] px-[2em]"> */}

                   {/* Agent Image & Social Links */}
               
                    <div className="relative w-full md:w-64 h-64 shadow-lg overflow-hidden">
                   
                      <Image src={agent.image.url} 
                        alt="Profile"
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                      />

                    
                      <div className="absolute bottom-4 left-0 flex gap-4 p-2 bg-customBlue text-white">
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
                  

                  {/* Agent Details */}
                    <div className="flex-1">
                      <h2 className="font-bold mb-[1em] text-xl">{agent.name}</h2>
                      <p className="text-sm text-gray-500">{agent.title}</p>

                    <div className='border-b-2 border-gray-200 my-4'></div>

                        <div className='flex items-center gap-4 text-sm mb-4'>
                          <Image src={call} alt="call" width={20} height={20}/>
                          <a href={`tel:${agent.phone}`} 
                            className="text-black hover:underline">
                            {agent.phone}
                          </a>
                        </div>

                        <div className='flex items-center gap-4 text-sm'>
                          <Image src={paperplane} alt="paperplane" width={20} height={20}/>
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

             <div className="mt-6">
                <h3 className="font-bold text-lg">Om {agent.name}</h3>
                {agent.description && (() => {
           

            const sentences = agent.description.match(/[^.!?]+[.!?]+/g) || [agent.description];
            
          
            const middleIndex = Math.ceil(sentences.length / 2);
            
        
            const firstPart = sentences.slice(0, middleIndex).join(' ');
            const secondPart = sentences.slice(middleIndex).join(' ');

            return (
              <>
                <p className="mt-2 text-sm">{firstPart}</p>
                <p className="mt-2 text-sm">{secondPart}</p>
              </>
            );
          })}
             </div>


             {/* Contact Form */}
             <div className="mt-8 border-2 border-gray-300 p-6">
                <h3 className="font-bold text-lg">Kontakt {agent.name}</h3>
                <form className="mt-4"  onSubmit={handleSubmit}>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1">
                      <label className="flex flex-col w-full "> Navn
                        <input 
                          type="text"
                          placeholder="Indtast navn"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-2 border-gray-300 mt-2 p-2"
                        />
                          {errors.name && (
                          <span className="text-red-500 text-xs">
                      {errors.name._errors[0]}
                    </span>
                  )}
                      </label>

                      <label className="flex flex-col w-full "> Email
                        <input 
                        type="email"
                        id="email"
                          placeholder="Indtast email"
                          className="border-2 border-gray-300 mt-2 p-2"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                         {errors.email && (
                          <span className="text-red-500 text-xs">
                          {errors.email._errors[0]}
                        </span>
                         )}
                      </label>

                  </div>
                

                   <label className="flex flex-col mt-4"> Emne
                    <input 
                    type="text"
                      id="subject"
                       placeholder="Hvad drejer din henvendelse sig om?"
                       className="border-2 border-gray-300 mt-2 p-2"
                       value={formData.subject}
                       onChange={handleInputChange}
                       />
                             {errors.subject && (
                        <span className="text-red-500 text-xs">
                        {errors.subject._errors[0]}
                      </span>
                )}
                  </label>

                  <label className="flex flex-col mt-4"> Besked
                    <input 
                      type="text"
                      id="message"
                      placeholder="Skriv din besked her..."
                      className=" border-2 border-gray-300 mt-[0.5em] pt-[1em] px-[1em] pb-[8em]"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                           {errors.message && (
                  <span className="text-red-500 text-xs">
                    {errors.message._errors[0]}
                  </span>
                )}
                  </label>

                  <button type="submit" className="bg-customBlue text-white my-[2em] w-[10em] h-[4em] text-xs">
                      {isSubmitting ? "Sending..." : "Send besked"} 
                  </button>
                </form>
                {successMessage && <div className="text-green-500 text-xs mt-2">{successMessage}</div>}
             </div>   
            </section>


          
          <aside className="flex flex-col items-center space-y-8 mb-8">
           
            <div className="w-full max-w-md bg-blue-50 p-[1em]">
              <h2 className="text-l font-bold">Search Property</h2>
              <div className="w-[14em] border-b-2 border-gray-200  mx-auto my-[1em]"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full  py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none placeholder: pl-10"
                />
                <button className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <Image src={search} alt="search icon" />
             
                </button>
              </div>
            </div>

          
            <div className="bg-customBlue text-white flex flex-col items-center py-[4em] px-[2em] text-center"
            
            >
              <h2 className="text-2xl font-bold mb-2">Find The Best Property</h2>
              <p className="text-lg font-medium mb-4">For Rent Or Buy</p>
              <div className="w-[4em] border-b-2 border-gray-200  mx-auto my-[1em]"></div>
              <p className="text-sm mb-2">Call Us Now</p>
              <a href="tel:+00 123 456 789" className="text-white hover:underline">
              +00 123 456 789
                </a>
            </div>
          </aside>
          </main>
          <Footer />
        </div>
    )
  
}















