import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhatsIncluded from "@/components/WhatsIncluded";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Payments from "@/components/Payments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhatsIncluded />
        <Portfolio />
        <About />
        <Payments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
