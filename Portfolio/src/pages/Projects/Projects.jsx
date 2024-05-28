import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { motion } from "framer-motion";
import { transition } from "../../scripts/transition";

export default function Projects() {
  return (
    <motion.main
      className="Projects col"
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={transition}
    >
      <div className="container col align-center mg1">
        <h2>Mes projets</h2>
        <div className="col cards gap15 mt1">
          <ProjectCard id="card1" title="Javascript et Sass" />
          <ProjectCard id="card2" title="React et Redux" />
          <ProjectCard id="card3" title="Angular, TypeScript et PHP" />
        </div>
      </div>
    </motion.main>
  );
}
