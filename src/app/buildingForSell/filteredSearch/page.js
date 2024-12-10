"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ContactHeader from "@/components/ContactHeader";
import OptionsHeader from "@/components/OptionsHeader";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import GetRandomColor from "@/components/GetRandomColor";
import FormatNumberWithDots from "@/components/FormatNumberWithDots";
import Image from "next/image";
import Link from "next/link";

export default function FilteredSearch() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const propertyType = searchParams.get("type");
  const maxPrice = searchParams.get("maxPrice");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch("https://dinmaegler.onrender.com/homes");
        const result = await res.json();

        const filtered = result.filter((home) => {
          const matchesType = propertyType ? home.type.toLowerCase() === propertyType.toLowerCase() : true;
          const matchesPrice = maxPrice ? home.price <= parseInt(maxPrice) : true;
          return matchesType && matchesPrice;
        });

        setFilteredData(filtered);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [propertyType, maxPrice]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ContactHeader />
      <OptionsHeader />
      <Title title={`Search Results for ${propertyType} & ${maxPrice}`} />
      <main className="flex justify-center items-center">
        <div>
          {filteredData.length === 0 ? (
            <p>No results found.</p>
          ) : (
            <ul>
              {filteredData.map((building) => (
                <li key={building.id} className="border border-gray-300 p-4 mb-4">
                  <Link href={`/building/${building.id}`}>
                    <div className="flex">
                      <Image src={building.images[0].url} alt="" width={200} height={300} />
                      <div className="flex flex-col justify-center px-[1em]">
                        <h3 className="font-bold text-sm mb-[0.5em]">{building.adress1}</h3>
                        <p className={`w-[2em] flex justify-center px-[1em] mb-[0.5em] ${GetRandomColor()}`}>{building.energylabel}</p>
                        <p className="font-bold text-sm mb-[0.5em]">
                          kr. {FormatNumberWithDots(building.price)}
                        </p>
                        <p className="text-sm">
                          {building.postalcode} {building.city}
                        </p>
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
  );
}
