import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import { motion } from "framer-motion";
import { transition } from "../../scripts/transition";
import data from "../../datas/projects.json";
const { projects } = data;

export default function Projects() {
  return (
    <>
      <ScrollBar />
      <motion.main
        className="Projects col align-center animationFadeIn"
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={transition}
      >
        <div className="container col align-center pdt25 pdb15 ">
          <h2>Mes projets</h2>
          <div className="col cards gap15 mt1">
            {projects.map((p, idx) => (
              <ProjectCard
                key={idx}
                title={p.title}
                description={p.description}
                img={p.img}
                link={p.link}
                tag={p.skills}
              />
            ))}
          </div>
        </div>
      </motion.main>
    </>
  );
}
