"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BuildingSearchBox() {
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState(12000000); // مقدار پیش‌فرض محدوده قیمت
  const router = useRouter();

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (propertyType) query.append("type", propertyType);
    query.append("maxPrice", priceRange);

    router.push(`/buildingForSell/filteredSearch?filteredSearch=${query.toString()}`);
  };

  return (
    <section className="flex justify-center mb-12 px-4">
        <div className=" w-full max-w-5xl p-6 ">
        <h2 className="text-l font-bold mb-4 text-start">Søg efter dit drømmehus</h2>

        <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 space-y-6 md:space-y-0">
            {/* bg-white p-6 shadow-lg rounded-lg max-w-xl mx-auto mt-10 */}

            <div className="w-full flex justify-evenly">
                   
                <div className="mb-4 ">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ejendomstype
                    </label>

                    <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    >
                    <option value="" className="text-gray-300">Ejendomstype</option>
                    <option value="villa">Villa</option>
                    <option value="lejlighed">Lejlighed</option>
                    <option value="rækkehus">Rækkehus</option>
                    <option value="sommerhus">Sommerhus</option>
                    </select>


                </div>


                <div className="w-full md:w-2/3">
                    <label className="block text-sm font-medium text-gray-700 mb-2 ">
                    Pris-interval
                    </label>
                    <input
                    type="range"
                    min="0"
                    max="12000000"
                    step="100000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full"
                    />
                    {/* <div className="text-left text-sm mt-2">0 kr. </div> */}
                    <div className="text-right text-sm mt-2">
                        {Number(priceRange).toLocaleString("da-DK")} kr. 
                    </div>

                </div>
            </div> 

            </div>
            

                <div className="flex justify-center mt-6">
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white px-6 py-2  font-bold hover:bg-blue-700 transition"
                >
                    Søg
                </button>  
                </div>
             

     
        
    </div>
    </section>
    
  );
}
