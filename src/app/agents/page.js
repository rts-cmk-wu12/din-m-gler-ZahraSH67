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
    const agent = await res.json();
    console.log("Agent IS:", agent)

    return(

        <>
                <ContactHeader />
                <OptionsHeader />
                <Title title="Medarbejdere i Roskilde"/>
                <main className="flex flex-col items-center">
                <div key={agent.id} className="flex flex-col items-center shadow rounded">
                        <Link href={`/contactAgent/${agent.id}`} className="w-full h-full flex flex-col items-center">
                            <div>
                            <Image src={agent.image.url} alt="agent" width={300} height={300} />
                            </div>
                            <div className="flex flex-col items-center h-[8em]">
                            <p className="font-bold text-sm mt-[1em] mb-[1em]">{agent.name}</p>
                            <p className="text-xs text-gray-500 mb-[2em]">{agent.title}</p>
                            </div>
                        </Link>

                        {/* Email and LinkedIn buttons (moved outside the Link component) */}
                        <div className="flex justify-evenly gap-[1em] mt-[1em]">
                            <a href={`mailto:${agent.email}`} className="text-black hover:underline">
                            <Image src={email} alt="email" className="w-[1em] h-[1em]" />
                            </a>
                            <Image src={linkedIn} alt="linkedIn" />
                        </div>
                        </div>

                </main>
                <Footer />
        </>
        
    )
}