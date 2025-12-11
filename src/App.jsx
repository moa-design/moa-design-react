import ScrollToHashElement from "./utils/ScrollToHashElement";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Esto vuelve a activar el scroll a #servicios, #porfolio, etc */}
      <ScrollToHashElement />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
