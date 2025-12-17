import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <ClientLogos />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
