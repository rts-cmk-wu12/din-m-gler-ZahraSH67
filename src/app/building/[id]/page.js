// app/building/[id]/page.js
import { notFound } from 'next/navigation';
import ContactHeader from '@/components/ContactHeader';
import OptionsHeader from '@/components/OptionsHeader';
import Footer from '@/components/Footer';
import Image from 'next/image';
import gallery from "@/assets/images/gallery.png"
import plan from "@/assets/images/plan.png"
import idLocation from "@/assets/images/idLocation.png"
import like from "@/assets/images/like.png"
import call from "@/assets/images/call.png"
import paperplane from "@/assets/images/paperplane.png"

async function BuildingDetails({ params }) {
  const { id } = await params; // Get the building ID from the URL

  // Fetch the building data based on the ID
  const res = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);

  if (!res.ok) {
    // If no data is found, return a 404 page
    notFound();
  }

  const building = await res.json();
  console.log("BUILDIN:", building)

  return (
    <div>
      <ContactHeader />
      <OptionsHeader />
      <main>
        <div >
          <Image 
          src={building.images[0].url}
          alt={`Image of ${building.adress1}`}  
          width={800}
          height={600}
          className='w-full h-auto'/>
        </div>

        <div className='flex justify-evenly items-center mt-[2em]'>
          <div>
            <p className='font-bold text-xs'>{building.adress1}</p>
            <p className='font-bold text-xs'>{building.postalcode} {building.city}</p>
          </div>
          <div className='flex justify-between w-[20em]'>
            <button>
              <Image src={gallery} alt='gallery'/>
            </button>
            <button>
              <Image src={plan} alt='plan'/>
            </button>
            <button>
              <Image src={idLocation} alt='idLocation'/>
            </button>
            <button>
              <Image src={like} alt='like'/>
            </button>
          </div>
          <div className='font-bold'>kr. {building.price}</div>
        </div>
        <div className="w-[50em] border-b-2 border-gray-200 mt-[2em] mx-auto"></div>



        <div className="overflow-x-auto mx-[12em] mt-[2em]">
      <table className="min-w-full table-auto border-collapse ">
        <tbody className="">
          <tr className="">
            <td className="  py-2">Sagsnummer:</td>
            <td className="  py-2">{building.id}</td>
            <td className="  py-2">Kælder:</td>
            <td className="  py-2">{building.basementsize}</td>
            <td className="  py-2">udbetaing:</td>
            <th className="  py-2">kr. {building.payment}</th>
          </tr>

          <tr className="">
            <td className="  py-2">Boligareal:</td>
            <td className="  py-2">{building.lotsize} m²</td>
            <td className="  py-2">Byggeår:</td>
            <td className="  py-2">{building.built}</td>
            <td className="  py-2">Brutto ex ejerudgift:</td>
            <th className="  py-2">kr. {building.netto}</th>
          </tr>


          <tr className="">
            <td className=" py-2">Grundareal:</td>
            <td className=" py-2">{building.livingspace} m²</td>
            <td className=" py-2">Ombygget:</td>
            <td className=" py-2">{building.remodel}</td>
            <td className=" py-2">Netto ex ejerudgift:</td>
            <th className=" py-2">kr. {building.netto}</th>
          </tr>  

          <tr className="">
            <td className="  py-2">Rum/værelser:</td>
            <td className="  py-2">{building.rooms}</td>
            <td className="py-2">Energimærke</td>
            <td className="py-2">{building.energylabel}</td>
            <td className="  py-2">Ejerudgifter:</td>
            <th className="  py-2">kr. {building.cost}</th>
          </tr>

          <tr className="">
            <td className="  py-2">Antal Plan:</td>
            <td className="  py-2"></td>
          </tr>

        </tbody>
        
      </table>
    </div>



    <section className='flex  md:flex-row gap-[2em] mx-[12em] mt-[2em]'>
      <div className='flex-1'>
        <h2 className='font-bold text-lg'>Beskrivelse</h2>
        {/* <p>{building.description}</p> */}
        {building.description && (() => {
            // Split the description into sentences using regex
            const sentences = building.description.match(/[^.!?]+[.!?]+/g) || [building.description];
            
            // Calculate the middle index
            const middleIndex = Math.ceil(sentences.length / 2);
            
            // Join sentences for each part
            const firstPart = sentences.slice(0, middleIndex).join(' ');
            const secondPart = sentences.slice(middleIndex).join(' ');

            return (
              <>
                <p>{firstPart}</p>
                <p className="mt-4">{secondPart}</p>
              </>
            );
          })()}
      </div>

      <div className='flex-1 '>
        <h2 className='font-bold text-lg mb-[1em]'>Ansvalig mægler </h2>
        <div className='flex border border-gray-200 h-auto p-[2em]'>
     
          <Image src={building.agent.image.url} alt="" width={200} height={200} className='h-auto'/>
          {/* <div className='absolute bottom-0 left-0 bg-customBlue text-white text-xs px-2 py-1 w-[60%]'>GOALLLLLLLLLLLLLLLLLLLLLLLLL</div> */}
    
          
          <div className='p-[1em]'>
            <p className='font-bold text-sm'>{building.agent.name}</p>
            <p className='text-xs text-gray-600'>{building.agent.title}</p>

            <div className='w-[2em] border-b-2 border-gray-200 mt-[2em] mb-[1em]'></div>

            <div className='flex items-center gap-[1em] text-xs	mb-[1em]'>
              <Image src={call} alt="call" className='w-[1em] h-[1em]'/>
              <a href={`tel:${building.agent.phone}`} 
                className="text-black hover:underline">
                {building.agent.phone}
              </a>
            </div>

        
            <div className='flex items-center gap-[1em] text-xs	'>
              <Image src={paperplane} alt="paperplane" className='w-[1em] h-[1em]'/>
              <a  href={`mailto:${building.agent.email}`}  
                className="text-black hover:underline">
                {building.agent.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
        


      </main>
      {/* <h1>{building.adress1}</h1>
      <p>{building.description}</p>
      <div>
        <h2>Details</h2>
        <p>Price: {building.price} kr.</p>
        <p>Energy Label: {building.energylabel}</p>
        <p>Rooms: {building.rooms}</p>
        <p>Size: {building.floorplan.size} m²</p>
     
      </div> */}
      <Footer />
    </div>
  );
}

export default BuildingDetails;
