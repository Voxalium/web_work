import transition from "../../scripts/transition";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import Collapse from "../../components/Collapse/Collapse";
import data from "../../datas/projects.json";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <ScrollBar />
      <main className="Projects row justify-center animationFadeIn ">
        <div className="container col align-center pdt25 pdb15 ">
          <h2>Mes projets</h2>

          <div className="col ">
            <h3 className="mt1 mb1">Développement web</h3>
            <Collapse
              title="Projets de ma formation Open Classrooms"
              data={data.projects}
              toggleModal={toggleModal}
            />
            <Collapse
              title="Projets personnels"
              data={data.perso}
              toggleModal={toggleModal}
            />
            <h3>Autre</h3>
          </div>
        </div>
      </main>
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </>
  );
}
export default transition(Projects);
