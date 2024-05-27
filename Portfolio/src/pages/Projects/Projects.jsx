import { motion } from "framer-motion";
export default function Projects() {
  return (
    <motion.main
      className="Projects col fullcenter
      "
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
    >
      <div className=" col fullcenter">
        <h2>Mes projets</h2>
        <section className="cards">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </section>
      </div>
    </motion.main>
  );
}
