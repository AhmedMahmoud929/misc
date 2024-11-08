import Navbar from "@/components/shared/Navbar";
import PackagesSection from "./_components/PackagesSection";
import WhySection from "./_components/WhySection";
import ExploreSlider from "./_components/ExploreSlider";
import FrequentlyAsk from "./_components/FrequentlyAsk";
import WelcomeSection from "./_components/WelcomeSection";
import HeroSection from "./_components/HeroSection";
import WhyQatar from "./_components/WhyQatar";
import OffersSection from "./_components/OffersSection";
import HappyClients from "./_components/HappyClients";
import Footer from "@/components/shared/Footer";
import { hospitalsSliderData, specialistsSliderData } from "@/constants/index";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <WelcomeSection />

      <WhySection />

      <WhyQatar />

      <ExploreSlider data={specialistsSliderData} />

      <PackagesSection />

      <ExploreSlider data={hospitalsSliderData} />

      <OffersSection />

      <HappyClients />

      <FrequentlyAsk />

      <Footer />
    </>
  );
}
