import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { motion } from "framer-motion";
import { transition } from "../../scripts/transition";
import data from "../../datas/projects.json";
const { projects } = data;

console.log(projects);
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
          {projects.map((p, idx) => (
            <ProjectCard
              key={idx}
              title={p.title}
              description={p.description}
              img={p.img}
              link={p.link}
            />
          ))}
        </div>
      </div>
    </motion.main>
  );
}
