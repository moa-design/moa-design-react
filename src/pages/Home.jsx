// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import Banner from "../components/Banner";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Navbar />
      <main>
        <Hero
          title="Lo que hacés, bien comunicado"
          subtitle="Diseño y estrategia a medida."
          buttonText="HABLEMOS SOBRE TU PROYECTO"
        />
        <ServicesSection />
        <Banner />
        <PortfolioSection />
        <AboutSection />
      </main>
      <Footer />
    </motion.div>
  );
}

