import Image from "next/image";
import email from "@/assets/images/email.png"
import linkedIn from "@/assets/images/linkedIn.png"
import ContactHeader from "@/components/ContactHeader";
import OptionsHeader from "@/components/OptionsHeader";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Link from "next/link";

export default async function Agents() {
 
    const res = await fetch('https://dinmaegler.onrender.com/agents');
    const data = await res.json();
    console.log("Agent IS:", data)

    return(

        <>
                <ContactHeader />
                <OptionsHeader />
                <Title title="Medarbejdere i Roskilde"/>
                <main className="flex flex-col items-center">
                    <div className="grid grid-cols-3 grid-rows-1 gap-[2em]">
                        {data.map((agent) => (
                            <Link key={agent.id} href={`/contactAgent/${agent.id}`} className="flex flex-col items-center shadow rounded">
                                <div>
                                    <Image src={agent.image.url} alt="" width={300} height={300}/>
                                </div>
                                <div className="flex flex-col items-center h-[8em]">
                                    <p className="font-bold text-sm mt-[1em] mb-[1em]">{agent.name}</p>
                                    <p className="text-xs  text-gray-500 mb-[2em]">{agent.title}</p>
                                    
                                    <div className="flex justify-evenly gap-[1em]">
                                        <a  href={`mailto:${agent.email}`}  
                                            className="text-black hover:underline">
                                            <Image src={email} alt="email" className='w-[1em] h-[1em]'/>
                                        </a>
                                        <Image src={linkedIn} alt="linkedIn"/>
                                    </div>


                                </div>
                            </Link>
                        ))}
                    </div>
                </main>
                <Footer />
        </>
        
    )
}