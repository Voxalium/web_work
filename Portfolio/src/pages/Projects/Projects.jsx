import ScrollBar from "../../components/ScrollBar/ScrollBar";
import Collapse from "../../components/Collapse/Collapse";
import { motion } from "framer-motion";
import { transition } from "../../scripts/transition";
import data from "../../datas/projects.json";
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
          <div className="mt15">
            <Collapse
              title="Projets de ma formation Open Classrooms"
              data={data.projects}
            />
            <Collapse title="Projets personnels" data={data.perso} />
          </div>
        </div>
      </motion.main>
    </>
  );
}
