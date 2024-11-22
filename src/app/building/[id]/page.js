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

        <div>
          <div>
            <p>{building.adress1}</p>
            <p>{building.postalcode} {building.city}</p>
          </div>
          <div>
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
          <div>{}</div>
        </div>



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
