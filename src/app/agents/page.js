
import Image from "next/image";
import email from "@/assets/images/email.png";
import linkedIn from "@/assets/images/linkedIn.png";
import ContactHeader from "@/components/ContactHeader";
import OptionsHeader from "@/components/OptionsHeader";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Link from "next/link";
import ErrorPage from "@/components/ErrorPage";

export default async function Agents() {
  let agentData = null;
  let error = false;

  try {
    const res = await fetch('https://dinmaegler.onrender.com/agents', { cache: 'no-store' }); // Ensures SSR fetching
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    agentData = await res.json();
  } catch (err) {
    console.error('Fetch error:', err);
    error = true;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <ContactHeader />
      <OptionsHeader />
      <Title title="Medarbejdere i Roskilde" />
      <main className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-8 mx-10 mb-8
      
      
      
      ">
         {/* grid grid-cols-3 grid-rows-2 gap-2 mx-[4em] */}
        {agentData.map((agent) => (
          <div key={agent.id} className="flex flex-col items-center shadow rounded p-4 m-4">
            <Link href={`/contactAgent/${agent.id}`} className="w-full h-full flex flex-col items-center">
              <div>
                <Image src={agent.image.url} alt="agent" width={300} height={300} />
              </div>
              <div className="flex flex-col items-center h-[8em]">
                <p className="font-bold text-sm mt-[1em] mb-[1em]">{agent.name}</p>
                <p className="text-xs text-gray-500 mb-[2em]">{agent.title}</p>
              </div>
            </Link>

            {/* Email and LinkedIn buttons */}
            <div className="flex justify-evenly gap-[1em] mt-[1em]">
              <a href={`mailto:${agent.email}`} className="text-black hover:underline">
                <Image src={email} alt="email" className="w-[1em] h-[1em]" />
              </a>
              <Image src={linkedIn} alt="linkedIn" className="w-[1em] h-[1em]" />
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
