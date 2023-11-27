import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <Team />
      <Banner />
      <Contact />
    </div>
  );
}
