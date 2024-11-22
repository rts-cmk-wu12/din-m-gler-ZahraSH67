import ContactHeader from "@/components/ContactHeader";
import Footer from "@/components/Footer";
import OptionsHeader from "@/components/OptionsHeader";
import Title from "@/components/Title";

export default async function ContactAgent({ params }) {
    const { id } = await params; // Get the building ID from the URL
  
    // Fetch the building data based on the ID
    const res = await fetch(`https://dinmaegler.onrender.com/agents/${id}`);
  
    if (!res.ok) {
      // If no data is found, return a 404 page
      notFound();
    }
  
    const agent = await res.json();
    console.log("Agent:", agent)
    return(
        <>
          <ContactHeader />
          <OptionsHeader />
          <Title title="Kontakt en medarbejder"/>
          <Footer />
        </>
    )
  
}