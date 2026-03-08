import Footer from "@/components/Footer";
import FreeTips from "@/components/FreeTips";
import HeroSection from "@/components/HeroSection";
import OtherTips from "@/components/OtherTips";
import TrackRecord from "@/components/TrackRecord";
import ValueBet from "@/components/ValueBet";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default function LandingPage() {
  return (
    <div>
      <HeroSection/>
      <FreeTips/>
      <TrackRecord/>
      <OtherTips/>
      <ValueBet/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  );
}
