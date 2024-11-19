import Image from "next/image";
export default async function SelectedHomes() {
    const res = await fetch('https://dinmaegler.onrender.com/homes');
    const data = await res.json();
    console.log("DATA IS:", data)


  return (
    <div>
      <h2>Udvalgte Boliger</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available but
        this in majority have suffered alteration in some.
      </p>


      {/* Map through the homes data and pass each home as props to SelectedHomesCard */}
      <section className="homes-grid">
        {data.map((home) => (
                <div key={home.id}>
                        <div className="image-container">
                        <Image src={home.images[0].url} alt="Building picture" width={400} height={300} />
                        </div>
                        <div className="details">
                        <h2>{home.adress1}</h2>
                        <p>{home.city}</p>
                        <div className="home-info">
                            <span>{home.type}</span>
                            <span>• Ejerudgift:</span>
                            <span>{home.netto} kr.</span>
                        </div>
                        </div>
                        <div className="more-info">
                        <div>
                            <span>{home.energylabel}</span>
                            <span>{home.rooms} værelser</span>
                            <span>{home.size} m²</span>
                        </div>
                        <div>kr. {home.price}</div>
                        </div>
                    </div>
        ))}
      </section>






      
    </div>
  )
}


