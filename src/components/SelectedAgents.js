'use client'

import Image from "next/image";
import React, { useState , useEffect } from "react";
import email from "@/assets/images/email.png"
import linkedIn from "@/assets/images/linkedIn.png"


export default function SelectedAgents() {
    const [agents, setAgents] = useState([]); // State to store the agents
    const [showAll, setShowAll] = useState(false); // State to toggle showing all agents
  
    // Fetch data on the client side
    useEffect(() => {
      const fetchAgents = async () => {
        try {
          const res = await fetch('https://dinmaegler.onrender.com/agents');
          const data = await res.json();
          console.log("Agents DATA:", data)
          setAgents(data); // Update state with fetched data
        } catch (error) {
          console.error("Error fetching agents:", error);
        }
      };
  
      fetchAgents();
    }, []);

    const displayedAgents = showAll ? agents : agents.slice(0, 3);

    return (
        <section className="flex flex-col items-center">
            <h2 className="font-bold text-lg mb-[1em]">Mød vores engagerede medarbejdere</h2>
            <p className="text-xs text-center mb-[2em]">Din Mægler er garant for altid veluddannet assistance i dit boligsalg. <br/> 
                Kontakt en af vores medarbejdere.</p>
            <div className="grid grid-cols-3 grid-rows-1 gap-[2em]">
                {displayedAgents.map((agent) => (
                    <div key={agent.id} className="flex flex-col items-center shadow rounded">
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
                    </div>
                ))}
            </div>

            <div className="mt-4 text-center">
                <button
                onClick={() => setShowAll((prev) => !prev)}
                className="px-4 py-2 bg-customBlue text-white hover:bg-blue-600"
                >
                {showAll ? "Vis mindre" : "Se alle mæglere"}
                </button>
            </div>
            
        </section>
    )
}  