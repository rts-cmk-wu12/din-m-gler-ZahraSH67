'use client'

import { useState } from "react";
import ContactHeader from "@/components/ContactHeader";
import OptionsHeader from "@/components/OptionsHeader";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import call from "@/assets/images/HeaderCall.png";
import email from "@/assets/images/Vector.png";
import location from "@/assets/images/location.png";
import Image from "next/image";
import map from "@/assets/images/Map.png";
import { z } from "zod";

export default function ContactUs() {
  // تعریف state ها
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

   // تعریف اسکیمای اعتبارسنجی Zod
   const schema = z.object({
    name: z.string().min(1, {message: "Navn er påkrævet."}),

    email: z.string()
      .min(1, {message:"Email er påkrævet."})
      .email("Ugyldig emailadresse."),

    subject: z.string().min(1, {message: "Emne er påkrævet."}),

    message: z.string().min(1, {message:"Besked er påkrævet."}),

    subscribe: z.boolean(),
  });


  // changing control in the fields of form
  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

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

  
  return (
    <div>
      <ContactHeader />
      <OptionsHeader />
      <Title title="Kontakt os" />

      <main className="">
        <h2 className="font-bold text-xl mx-[6em]">Vi sidder klar til at besvare dine spørgsmål</h2>
        <p className="text-xs mt-[1.5em] mx-[9em]">
          Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. <br />
          Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.
        </p>

        <div className="flex flex-col lg:flex-row lg:gap-8 mx-4 lg:mx-20 mt-8  mb-20">
          <section className="w-full lg:w-2/3  border-2 border-gray-300 p-8">
              <form onSubmit={handleSubmit} className="">
                {/* فیلدهای فرم */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1">
                  <label className="flex flex-col w-full">
                    Navn
                    <input
                      type="text"
                      id="name"
                      placeholder="Indtast navn"
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

                  <label className="flex flex-col w-full">
                    Email
                    <input
                      type="email"
                      id="email"
                      placeholder="Indtast email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 border-gray-300 mt-2 p-2"
                    />
                        {errors.email && (
                          <span className="text-red-500 text-xs">
                          {errors.email._errors[0]}
                        </span>
                  )}
                  </label>
                </div>

                <label className="flex flex-col mt-4">
                  Emne
                  <input
                    type="text"
                    id="subject"
                    placeholder="Indtast emne"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border-2 border-gray-300 mt-2 p-2"
                  />
                      {errors.subject && (
                        <span className="text-red-500 text-xs">
                        {errors.subject._errors[0]}
                      </span>
                )}
                </label>

                <label className="flex flex-col mt-4">
                  Besked
                  <textarea
                    id="message"
                    placeholder="Indtast din besked..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-2 border-gray-300 mt-2 p-2"
                  />
                      {errors.message && (
                  <span className="text-red-500 text-xs">
                    {errors.message._errors[0]}
                  </span>
                )}

                </label>

                <div className="mt-[1em]">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="subscribe" className="ml-2">
                    Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-customBlue text-white my-[2em] w-[10em] h-[4em] text-xs"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sender..." : "Send besked"}
                </button>
              </form>

              {successMessage && (
                <div
                  className={`mt-4 ${successMessage.includes("succesfuldt") ? "text-green-600" : "text-red-600"}`}
                >
                  {successMessage}
                </div>
              )}
          
          </section>


    
        {/* اطلاعات تماس */}
        <aside className="flex flex-col justify-center w-full lg:w-[30%]  border-2 border-gray-300 p-4">


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
                        className="text-black hover:underline text-xs text-center"
                        >
                        Stændertorvet 78, <br/> 4000 Roskilde
                    </a>
                </div> 
             </aside>

             </div>

        <div
          style={{ backgroundImage: `url(${map.src})` }}
          className="w-full h-[300px] bg-cover bg-center"
        ></div>
      </main>
      <Footer />
    </div>
  );
}
