import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
export default function Collapse({ title, data, toggleModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen ? "open" : "close"} Collapse col `}>
      <h4 onClick={handleClick} className="pdl1 br12">
        {title}
        {isOpen ? (
          <span className="sign">-</span>
        ) : (
          <span className="sign">+</span>
        )}
      </h4>
      <div className="col cards gap15 mt1 mb1">
        {data.map((d, idx) => (
          <ProjectCard
            key={idx}
            title={d.title}
            description={d.description}
            img={d.img}
            link={d.link}
            tag={d.skills}
            toggleModal={toggleModal}
          />
        ))}
      </div>
    </div>
  );
}
