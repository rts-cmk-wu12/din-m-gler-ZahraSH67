
import Image from "next/image";
import ContactHeader from "@/components/ContactHeader";
import OptionsHeader from "@/components/OptionsHeader";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Link from "next/link";


export default async  function BuildingForSell() {
 
    const res = await fetch('https://dinmaegler.onrender.com/homes');
    const data = await res.json();
    console.log("DATA IS:", data)

     //Random color
     const getRandomColor = () => {
        const colors = ["bg-red-200", "bg-green-200", "bg-blue-200", "bg-yellow-200", "bg-purple-200"];
        return colors[Math.floor(Math.random() * colors.length)];
      };
  
      // // Limit the number of cards to 4
      // const limitedData = data.slice(0, 4);
  
    // Function to format numbers with dots
    const formatNumberWithDots = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
  return (
    <div>
      <ContactHeader />
      <OptionsHeader />
      <Title title="Boliger til salg"/>
      {/* Map through the homes data and pass each home as props to SelectedHomesCard */}
      <section className=" grid grid-cols-2 gap-6 ">
     
        {data.map((home) => (
                <Link key={home.id} href={`/building/${home.id}`} className="w-[25em] h-auto ml-[6em] shadow-md rounded-lg">

                        <div className="w-full">
                        <Image src={home.images[0].url} alt="Building picture" width={400} height={300}/>
                        </div>

                        <div>
                          <h2 className="font-bold mx-[1em] my-[1em]">{home.adress1}</h2>
                          <p className=" text-sm mx-[1em] mb-[1em]">{home.postalcode} {home.city}</p>
                          <div className="mx-[1em] mb-[1em] ">
                              <span className="font-bold">{home.type}</span>
                              <span className="text-sm"> •Ejerudgift: </span>
                              <span className="text-sm">{formatNumberWithDots(home.netto)} kr.</span>
                          </div>
                          <div className="w-[18em] border-b-2 border-gray-400 mt-2 mx-auto"></div>
                        </div>


                        <div className="mx-[1em] my-[1em] flex justify-between">
                        <div>
                            <span className={`px-2 py-1 ${getRandomColor()}`}>{home.energylabel} </span>
                            <span className="ml-[1em] text-sm">{home.rooms} værelser.  </span>
                            <span className="ml-[0.25em]">{home.floorplan.size} m²</span>
                        </div>
                        <div className="font-bold"> kr. {formatNumberWithDots(home.price)}</div>
                        </div>
                    </Link>
        ))}
      </section>
        <Footer />
    </div>
  )
}
