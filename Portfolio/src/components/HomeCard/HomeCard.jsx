import { useState } from "react";
import Button from "../Button/Button";

function HomeCard({ title, text }) {
  const textArray = text?.map((t, index) => (
    <p key={`text-${index}`} className="text textcenter ">
      {t}
    </p>
  ));

  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <div className="card">
      <div className="outer br12 col fullcenter ">
        <div
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={`inner br12 pd15 col fullcenter ${
            !isOpen ? "bg" : "bg-light"
          }`}
        >
          <h1>{title}</h1>
          <div className="mt1">{textArray}</div>
        </div>
      </div>
      <div
        className={`buttons mt1 gap15 row fullcenter  ${
          isOpen ? "visible" : "hidden "
        }`}
      >
        <Button text="Mes Projets" />
        <a href="/documents/CV_Terence_Truyens.pdf" target="_blank">
          {" "}
          <Button text="Mon CV" />
        </a>
      </div>
    </div>
  );
}

export default HomeCard;
