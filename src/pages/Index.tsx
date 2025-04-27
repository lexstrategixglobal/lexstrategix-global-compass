
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";

const Index = () => {
  // Use the scroll reveal hook
  useScrollReveal();

  // Update page title
  useEffect(() => {
    document.title = "Lexstrategix Global - Business Services for US Companies";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
