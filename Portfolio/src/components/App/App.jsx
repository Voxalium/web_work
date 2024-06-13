import NavBar from "../NavBar/NavBar";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "../../pages/Projects/Projects";
import NotFound from "../../pages/NotFound/NotFound";
import Contact from "../../pages/Contact/Contact";

import Home from "../../pages/Home/Home";
export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className="background"></div>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
