import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const email = "/img/envelope-regular.webp";
const project = "/img/wrench-solid.webp";
const cv = "/img/file-regular.webp";

export default function HomeCard({ title, text }) {
  const textArray = text?.map((t, index) => (
    <p key={`text-${index}`} className="text textcenter ">
      {t}
    </p>
  ));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card col fullcenter">
      <div className="outer br12 col fullcenter ">
        <div
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={`inner br12 pd15 col fullcenter ${
            !isOpen ? "bg" : "bg-light"
          }`}
        >
          <h2>{title}</h2>
          <div className="text mt1 col fullcenter">{textArray}</div>
        </div>
      </div>
      <div
        className={`buttons mt1 gap25 row fullcenter  ${
          isOpen ? "visible" : "hidden "
        }`}
      >
        <NavLink to="/projects">
          <Button text="Mes Projets" img={project} />
        </NavLink>
        <NavLink className="translate" to="/contact">
          <Button text="Contactez moi" img={email} />
        </NavLink>
        <a href="/documents/CV_Terence_Truyens.pdf" target="_blank">
          <Button text="Mon CV" img={cv} />
        </a>
      </div>
    </div>
  );
}
