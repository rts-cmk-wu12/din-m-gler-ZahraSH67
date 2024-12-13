"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ContactHeader from "@/components/ContactHeader";
import OptionsHeader from "@/components/OptionsHeader";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import GetRandomColor from "@/components/GetRandomColor";
import FormatNumberWithDots from "@/components/FormatNumberWithDots";
import Link from "next/link";

export default function BuildingForSell() {
  const [data, setData] = useState([]); // همه داده‌ها
  const [filteredData, setFilteredData] = useState([]); // داده‌های فیلتر شده
  const [propertyType, setPropertyType] = useState(""); // نوع ملک
  const [priceRange, setPriceRange] = useState(12000000); // محدوده قیمت
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch("https://dinmaegler.onrender.com/homes");
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();
        setData(result);
        setFilteredData(result); // ابتدا همه داده‌ها را نمایش می‌دهیم
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // تابع جستجو
  const handleSearch = () => {
    const filtered = data.filter((home) => {
      const matchesType = propertyType
        ? home.type.toLowerCase() === propertyType.toLowerCase()
        : true;
      const matchesPrice = home.price <= priceRange;
      return matchesType && matchesPrice;
    });
    setFilteredData(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load data.</div>;
  }

  return (
    <div>
      <ContactHeader />
      <OptionsHeader />
      <Title title="Boliger til salg" />

      {/* جعبه جستجو */}
      <section className="flex justify-center mb-12 px-4">
        <div className="w-full max-w-5xl p-6">
          <h2 className="text-l font-bold mb-4 text-start">
            Søg efter dit drømmehus
          </h2>

          <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 space-y-6 md:space-y-0">
            <div className="w-full flex justify-evenly">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ejendomstype
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="" className="text-gray-300">
                    Ejendomstype
                  </option>
                  <option value="villa">Villa</option>
                  <option value="Ejerlejlighed">Ejerlejlighed</option>
                  <option value="byhus">Byhus</option>
                  <option value="landejendom">Landejendom</option>
                </select>
              </div>

              <div className="w-full md:w-2/3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <div className="text-right text-sm mt-2">
                  {Number(priceRange).toLocaleString("da-DK")} kr.
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-2 font-bold hover:bg-blue-700 transition"
            >
              Søg
            </button>
          </div>
        </div>
      </section>

      {/* نتایج جستجو */}
      <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 px-4 md:px-8 mx-10 mb-8">
        {filteredData.length === 0 ? (
          <p>No results found.</p>
        ) : (
          filteredData.map((home) => (
            <Link
              key={home.id} href={`/building/${home.id}`} 
              className="shadow-md overflow-hidden bg-white border rounded"
            >
              <div className="w-full h-48 md:h-56 lg:h-64 relative">
                <Image
                  src={home.images[0].url}
                  alt="Building picture"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h2 className="font-bold mx-[1em] my-[1em]">{home.adress1}</h2>
                <p className="text-sm mx-[1em] mb-[1em]">
                  {home.postalcode} {home.city}
                </p>
                <div className="mx-[1em] mb-[1em]">
                  <span className="font-bold">{home.type}</span>
                  <span className="text-sm"> • Ejerudgift: </span>
                  <span className="text-sm">
                    {FormatNumberWithDots(home.cost)} kr.
                  </span>
                </div>
                <div className="w-[18em] border-b-2 border-gray-400 mt-2 mx-auto"></div>
              </div>
              <div className="mx-[1em] my-[1em] flex justify-between">
                <div>
                  <span className={`px-2 py-1 ${GetRandomColor()}`}>
                    {home.energylabel}
                  </span>
                  <span className="ml-[1em] text-sm">
                    {home.rooms} værelser.
                  </span>
                  <span className="ml-[0.25em]">{home.floorplan.size} m²</span>
                </div>
                <div className="font-bold">
                  kr. {FormatNumberWithDots(home.price)}
                </div>
              </div>
            </Link>
          ))
        )}
      </section>

      <Footer />
    </div>
  );
}
