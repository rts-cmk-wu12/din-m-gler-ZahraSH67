"use client"
import loginAction  from "@/actions/loginAction";
import { redirect } from "next/navigation"
import { useActionState, useEffect } from "react"
import ContactHeader from "@/components/ContactHeader";
import OptionsHeader from "@/components/OptionsHeader";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Login() {

  const [formState, formAction] = useActionState(loginAction, null)
 
	useEffect(function() {
		if (!formState) return

		if (!formState.success) {
			alert("FEJL!!")
		}

		if (formState.success) {
			redirect("/")
		}

  
	}, [formState])

  return (
    <div>
      <ContactHeader />
      <OptionsHeader />
      <Title title="Account Login" subTitle="Home | Login"/>
      <main className="flex justify-center p-6">

        <div className="flex flex-col bg-white border border-gray-300 shadow-lg py-8 px-6 w-full max-w-lg sm:px-10">

        <div >
          <h2 className="text-lg font-bold mb-6 text-center">
          Log ind på din konto
          </h2>

          <form 
          action={formAction}  method="POST">
           
            <div className="flex flex-col mb-4">
              <label htmlFor="fEmail" className="text-sm mb-2">
                Email 
              </label>
              <input
                type="email"
              
                name="identifier"
                id="fEmail"
               
                placeholder="Email"
                className="h-10 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                
              />
              <span className="text-red-500 text-xs">{formState?.identifier?._errors.map(error => error)}</span>
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="fPass" className="text-sm mb-2">
                Password
              </label>
              <input
                type="password"
            
              
              
                name="password"
                id="fPass"
                placeholder="Password"
                className="h-10 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
              />
                 <span className="text-red-500 text-xs">{formState?.password?._errors.map(error => error)}</span>
            </div>

            <button
              type="submit"
              className="bg-customBlue text-white h-10 w-full rounded hover:bg-blue-600 transition duration-300"
            >
              Log ind
            </button>
          </form>
        
        </div>
        

        <div className="my-[2em] w-full" >
            <h3 className="mb-[1em]">Log ind med </h3>
            <div className="flex justify-between">
                <Link href="/#" className="bg-[#DD4B39] text-white py-[0.5em] px-[2em]">Google</Link>
                <Link href="/#" className="bg-[#3B5999] text-white py-[0.5em] px-[2em]">Facebook</Link>
                <Link href="/#" className="bg-black text-white py-[0.5em] px-[2em]">Twitter</Link>
            </div>
        </div>



        <div className="text-center text-xs	">
        Har du ikke en konto? 
            <Link href="/accountRegister" className="text-[#2F80ED]"> Opret bruger. </Link>
        
        </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}




