import NavBar from "../NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Projects from "../../pages/Projects/Projects";
import NotFound from "../../pages/NotFound/NotFound";
import Contact from "../../pages/Contact/Contact";

import Home from "../../pages/Home/Home";
export default function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
