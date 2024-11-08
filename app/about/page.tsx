import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AboutSection from "./_components/AboutSection";
import MISCTeam from "./_components/MISCTeam";
import BrandValues from "./_components/BrandValues";
import CoreServices from "./_components/CoreServices";
import PartnerSection from "./_components/PartnersSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <MISCTeam />
      <BrandValues />
      <CoreServices />
      <PartnerSection />
      <Footer />
    </>
  );
}
