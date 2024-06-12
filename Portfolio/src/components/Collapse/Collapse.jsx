import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
export default function Collapse({ title, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={() => handleClick()}
      className={`${isOpen ? "open" : "close"} Collapse col `}
    >
      <h3 className="pdl1 br12">{title}</h3>
      <div className="col cards gap15 mt1 mb1">
        {data.map((d, idx) => (
          <ProjectCard
            key={idx}
            title={d.title}
            description={d.description}
            img={d.img}
            link={d.link}
            tag={d.skills}
          />
        ))}
      </div>
    </div>
  );
}