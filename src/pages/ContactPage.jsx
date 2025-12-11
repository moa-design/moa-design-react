// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Navbar />
      <ContactSection />
      <Footer />
    </motion.div>
  );
}
