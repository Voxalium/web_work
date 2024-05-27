import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import NotFound from "../../pages/NotFound/NotFound";

import { AnimatePresence } from "framer-motion";
export function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
