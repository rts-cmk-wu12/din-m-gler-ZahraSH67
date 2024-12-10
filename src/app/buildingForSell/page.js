"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ContactHeader from "@/components/ContactHeader";
import OptionsHeader from "@/components/OptionsHeader";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Link from "next/link";
import ErrorPage from "@/components/ErrorPage";
import BuildingSearchBox from "@/components/BuildingSearchBox";
import GetRandomColor from "@/components/GetRandomColor";
import FormatNumberWithDots from "@/components/FormatNumberWithDots";


export default  function BuildingForSell() {
  // let data = null;
  // let error = false;

  const [data, setData] = useState([]);
  const [error, setError] = useState(false); // Add error state


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dinmaegler.onrender.com/homes");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        console.log("Fetched Data:", result); // Log the fetched data
        setData(result);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(true); // Set error state to true if fetch fails
      }
      
    }
    fetchData();
  }, []);


  console.log("Data State:", data); // Log the current state of data

 

    if (error) {
      return <ErrorPage />;
    } 

  return (
    <div>
      <ContactHeader />
      <OptionsHeader />
      <Title title="Boliger til salg"/>
      <BuildingSearchBox />
      {/* Map through the homes data and pass each home as props to SelectedHomesCard */}
      <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 px-4 md:px-8 mx-10 mb-8">
     
        {data.map((home) => (
                <Link key={home.id} href={`/building/${home.id}`} className="shadow-md  overflow-hidden bg-white">

                        <div className="w-full h-48 md:h-56 lg:h-64 relative">
                        <Image src={home.images[0].url} 
                          alt="Building picture" 
                          layout="fill"
                          objectFit="cover"/>
                        </div>

                        <div>
                          <h2 className="font-bold mx-[1em] my-[1em]">{home.adress1}</h2>
                          <p className=" text-sm mx-[1em] mb-[1em]">{home.postalcode} {home.city}</p>
                          <div className="mx-[1em] mb-[1em] ">
                              <span className="font-bold">{home.type}</span>
                              <span className="text-sm"> •Ejerudgift: </span>
                              <span className="text-sm">{FormatNumberWithDots(home.cost)} kr.</span>
                          </div>
                          <div className="w-[18em] border-b-2 border-gray-400 mt-2 mx-auto"></div>
                        </div>


                        <div className="mx-[1em] my-[1em] flex justify-between">
                        <div>
                            <span className={`px-2 py-1 ${GetRandomColor()}`}>{home.energylabel} </span>
                            <span className="ml-[1em] text-sm">{home.rooms} værelser.  </span>
                            <span className="ml-[0.25em]">{home.floorplan.size} m²</span>
                        </div>
                        <div className="font-bold"> kr. {FormatNumberWithDots(home.price)}</div>
                        </div>
                    </Link>
        ))}
      </section>
        <Footer />
    </div>
  )
}
