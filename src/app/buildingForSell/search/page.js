
'use client'

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ContactHeader from "@/components/ContactHeader";
import OptionsHeader from "@/components/OptionsHeader";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import GetRandomColor from "@/components/GetRandomColor";
import FormatNumberWithDots from "@/components/FormatNumberWithDots";
import Image from "next/image";
import Link from "next/link";


export default function SearchResults() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState("")
  const router = useRouter();
//   const search  = router.query.search; // Extract search query from the URL
  const searchParams = useSearchParams();
  const search = searchParams.get("search");


// Fetch data from your API or data source
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch("https://dinmaegler.onrender.com/homes"); // Replace with your API URL
        const result = await res.json();
        setData(result);
        if (search) {

          // Filter the data based on the search term
          const filtered = result.filter((home) =>
            home.adress1.toLowerCase().includes(search.toLowerCase()) ||
            home.city.toLowerCase().includes(search.toLowerCase()) ||
            home.type.toLowerCase().includes(search.toLowerCase()) 
            // home.agengt.name.toLowerCase().includes(search.toLowerCase()) 
          );
          setFilteredData(filtered);
        } else {
          setFilteredData(result); // If no search term, show all
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    if (search) {
      fetchData(); // Trigger fetch only when search is available
    }
  }, [search]);

  if (loading) {
    return <div>Loading...</div>;
  }

return (
    <div className="">
      <ContactHeader />
      <OptionsHeader />
      <Title title={`Search Results for ${search}`} />


      <main className='flex justify-center items-center '>
          <div className=''>{filteredData.length === 0 ? (
          <p>No results found for {search}.</p>
        ) : (
          <ul className=''>
            {filteredData.map((building) => (
              <li key={building.id} className="border bordr-gray-300 p-4 mb-4 bg-red-500">
                 <Link href={`/building/${building.id}`} className="flex">
                  <div className='flex'>
                    <div>
                      <Image src={building.images[0].url} alt="" width={200} height={300}/>
                    </div>

                  <div className='flex flex-col justify-center px-[1em]'>
                    <div className='flex gap-[1em] mb-[1em]'>
                      <h3 className='font-bold text-sm'>{building.adress1}</h3>
                      <div className=''>
                        <span className={`px-2 py-1 ${GetRandomColor()}`}>
                          
                          {building.energylabel} </span>
                        <span className="ml-[1em] text-sm">{building.rooms} værelser.  </span>
                        <span className="ml-[0.25em] text-sm">{building.floorplan.size} m²</span>
                      </div>
                      <p className="font-bold text-sm"> kr. {FormatNumberWithDots(building.price)}</p>
                    </div>

                    <p className=" text-sm mx-[1em] mb-[1em]">{building.postalcode} {building.city}</p>

                    <div className='flex justify-between'>
                    <div className="mx-[1em] mb-[1em] text-sm	">
                      <span className="font-bold">{building.type}</span>
                      <span className="text-sm"> •Ejerudgift: </span>
                      <span className="text-sm">{FormatNumberWithDots(building.cost)} kr.</span>
                    </div>
                   {/* <button className='bg-customBlue text-white p-[1em]'
                    onClick={() => handleRemoveBuilding(building.id)} // Add click handler here
                    >Fjern fra favotitter</button> */}
                    </div>
           
                  </div>
                 
                </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
        </div>
      
      </main>
 
      <Footer />
    </div>
)
}