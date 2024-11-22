// import Image from "next/image";
import ContactHeader from "@/components/ContactHeader";
import Hero from "@/components/Hero";
import OptionsHeader from "@/components/OptionsHeader";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/ExperienceSection";
import SelectedHomes from "@/components/SelectedHomes";
export default function Home() {
  return (
    <div 
    // className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <ContactHeader />
      <OptionsHeader />
      <Hero />
      <ExperienceSection />
     <SelectedHomes />
      <Footer />
    </div>
  );
}
